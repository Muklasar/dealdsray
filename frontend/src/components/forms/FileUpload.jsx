import Resizer from 'react-image-file-resizer'
import { uploadImage, removeImage } from '../../function/cloudinary';
// import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Avatar, Badge } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const FileUpload = ({ values, setValues, loading, setLoading }) => {
    // const { user } = useSelector(state => ({ ...state }))

    const handleImageRemove = (id) => {
        setLoading(true)
        removeImage(id)
            .then(res => {
                console.log("remove res", res)
                const { images } = values
                let filterImages = images.filter(image => image.public_id !== id)
                setValues({ ...values, images: filterImages })
                setLoading(false)
            }).catch(err => {
                console.log("remove error", err)
                setLoading(false)
            })
    }

    const fileUploadAndResize = (e) => {
        const files = e.target.files;
        console.log('files', files)
        let allUpdateFiles = [...values.images]
        // console.log
        if (files) {
            for (let i = 0; i < files.length; i++) {
                Resizer.imageFileResizer(
                    files[i],
                    720,
                    720,
                    'JPEG',
                    100,
                    0,
                    uri => {
                        // console.log("uri", uri)
                        // console.log('usera',user)
                        setLoading(true)
                        uploadImage(uri)
                            .then(res => {
                                // console.log('upload images url', res)

                                allUpdateFiles.push(res.data)

                                // set state images values
                                setValues({ ...values, images: allUpdateFiles })

                                // loading false
                                setLoading(false)

                            }).catch(err => {
                                // console.log("err", err)
                                toast.error("images upload faild")
                                // loading false
                                setLoading(false)
                            })
                    },
                    "base64"
                )
            }
        }

    }

    return (
        <>
            {loading ?
                <LoadingOutlined className='text-danger h2' /> :
                <div className='row mb-3'>
                    {values.images.length > 0 &&
                        values.images.map(image => (
                            <Badge
                                key={image.public_id}
                                count="X"
                                className='w-auto ms-4 p-0'
                                style={{ cursor: "pointer" }}
                                onClick={() => handleImageRemove(image.public_id)}
                            >
                                <Avatar
                                    src={image.url}
                                    size={100}
                                    shape='square'
                                />
                            </Badge>
                        ))
                    }
                </div>
            }
            <div className="row w-25">
                <label className='btn btn-md btn-success'>Choose file
                    <input
                        type="file"
                        multiple
                        hidden
                        accept=".png, .jpg, .jpeg"
                        onChange={fileUploadAndResize}
                    />
                </label>
            </div>
        </>
    )
}

export default FileUpload