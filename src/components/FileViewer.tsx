import { MediaContext } from '@/context/MediaContext';
import React, { useContext } from 'react'

const FileViewer = () => {
    const {
        fileViewerModalRef
    } = useContext(MediaContext);

    const downloadLink = ((fileViewerModalRef?.current as any)?.file as any)?.downloadLink;

    console.log(fileViewerModalRef);

    return (
        <figure className="relative ">
            <img
                src={fileViewerModalRef ? downloadLink : `https://placehold.co/300x200?text=${0}`}
                alt="Shoes"
                className="w-[300px] h-[200px] object-scale-down "
                style={{
                    maxWidth: "300px",
                }}
            />
        </figure>
    )
}

export default FileViewer