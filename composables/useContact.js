export default function useContact() {
    const toast = useToast();

    const showToast = (message, color) => {
        toast.add({
            title: message,
            color: color,
        });
    }

    const sendMessage = async (form) => {
        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('email', form.email);
        formData.append('message', form.message);

        const response = await fetch('https://formspree.io/f/mldrgrnb', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData,
        });

        if (response.ok) {
            form.name = '';
            form.email = '';
            form.message = '';
            showToast("Your message has been sent!", "green");
        } else {
            const data = await response.json();
            console.error('Error:', data);

            const errorFields = data.errors.flatMap(error => error.field);

            switch (errorFields[0]) {
                case 'email':
                    return showToast("Please add a valid email.", "red");
                case 'name':
                    return showToast("That name is just no good.", "red");
                case 'message':
                    return showToast("That message is just no good.", "red");
                default:
                    return showToast("An error occurred: your message could not be sent.", "red");
            }
        }
    }

    return {
        sendMessage,
    }
}