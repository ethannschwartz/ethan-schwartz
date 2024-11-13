export default function useContact() {
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
        } else {
            const data = await response.json();
            console.error('Error:', data);
        }
    }

    return {
        sendMessage,
    }
}