
export const fileUpload = async(file) => {
    if( !file ) throw new Error('File cannot be empty');
    const bucket = import.meta.env.VITE_APP_bucket;
    const bucketName = import.meta.env.VITE_APP_bucketName;
    const cloudUrl = `https://api.cloudinary.com/v1_1/${bucket}/upload`;

    const formData = new FormData();
    formData.append('upload_preset', bucketName);
    formData.append('file', file);

    try {
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });

        if ( !resp.ok ) throw new Error('Unable to upload image');

        const cloudResp = await resp.json();

        return cloudResp.secure_url;

    } catch (error) {
        throw new Error( error.message );
    }
}