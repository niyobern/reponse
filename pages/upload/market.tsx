import { useEffect, useState } from "react";
import { ChangeEvent } from "react";
import Link from "next/link";

export default function AddProduct(){
    const [images, setImages] = useState<File[]>([])
    const [formData, setFormData] = useState({"title": "", "content": ""})
    function handleFileSelect(evt: any) {
        setImages([...images, ...evt.target.files])
    }
    useEffect(displayImages)
    function displayImages(){
        var files = images
        const list = document.getElementById('list') || document.createElement("div")
        list.innerHTML = ""
    
        // Loop through the FileList and render image files as thumbnails.
        // for (var i = 0, f; f = files[i]; i++) 
        files.forEach((f, i) => {
    
            // Only process image files.
            if (!f.type.match('image.*')) {
              return;
            }
      
            var reader = new FileReader();
      
            // Closure to capture the file information.
            reader.onload = (function(theFile) {
              return function(e) {
                // Render thumbnail.
                var span = document.createElement('span');
                span.innerHTML = 
                [
                  '<img style="height: 75px; border: 1px solid #000; margin: 5px" src="', 
                  e.target?.result,
                  '" title="', 
                  '"/>'
                ].join('');
                span.addEventListener("click", ()=> {
                  const rect = span.getBoundingClientRect()
                  var close = document.createElement('span');
                  close.innerText = "Delete"
                  close.style.width = String(rect.width) + "px"
                  close.style.height = String(rect.height) + "px"
                  close.style.top = String(rect.top) + "px"
                  close.style.left = String(rect.left) + "px"
                  close.style.position = "absolute"
                  // close.classList.add("absolute", `top-[${rect.top}px] left-[${rect.left}px]`)
                  close.classList.add("bg-gray-500", "z-50", "bg-opacity-50", "cursor-pointer", "text-white", "font-medium", "text-center", "justify-center", "flex", "items-center")
                  close.addEventListener("click", () => {
                    const imagesCopy = [...images]
                    imagesCopy.splice(i, 1)
                    setImages(imagesCopy)
                  })
                  span.insertBefore(close, null)
                })

                document.getElementById('list')?.insertBefore(span, null);
              };
            })(f);
      
            // Read in the image file as a data URL.
            reader.readAsDataURL(f);
          })
      }
    function handleChanges(evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = evt.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }
    function handleSubmit(evt: any) {
        evt.preventDefault()
        const data = new FormData()
        data.append("title", formData.title)
        data.append("content", formData.content)
        images.forEach((image, i) => {
            data.append(`image-${i}`, image)
        })
        fetch("https://reponse_backend-1-r0934826.deta.app/images", {
            method: "POST",
            body: data
        })
    }
    return (
        <div className="flex flex-col p-2 md:p-6 items-center">
            <div className="flex flex-col items-center gap-4 w-full md:w-2/3 lg:w-1/2">
                <div className="flex gap-2 bg-gray-100 w-full p-1 justify-between hover:bg-white text-blue-900 font-medium">
                    <Link href="/upload/extensions" className="py-2 px-4 rounded hover:bg-gray-100 cursor-pointer">Extensions</Link>
                    <Link href="/upload/opportunities" className="py-2 px-4 rounded hover:bg-gray-100 cursor-pointer">Opportunities</Link>
                    <Link href="/upload/market" className="py-2 px-4 rounded hover:bg-gray-100 cursor-pointer">Market</Link>
                </div>
                <h1 className="text-blue-900 font-medium w-fit">Add Product</h1>
                {/* Form */}
                <div className="w-full bg-gray-100 p-2 gap-4 md:p-3">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="title" className="text-blue-900">Name</label>
                        <input onChange={handleChanges} className="p-1" id="name" name="name" type="text" placeholder="  Title"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="content" className="text-blue-900">Description</label>
                        <textarea onChange={handleChanges} className="h-20 p-1" id="description" name="description" placeholder="  Content"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="content" className="text-blue-900">Description</label>
                        <input type="number" onChange={handleChanges} className="p-1" id="price" name="price" placeholder="  Price"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="files" className="font-medium text-blue-900 pt-2">Add Image(s)</label>
                        <input accept="image/*" type="file" id="files" multiple={true} onChange={handleFileSelect} className="w-0 h-0"/>
                        <output className="flex flex-wrap" id="list"></output>
                    </div>
                    <div className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 text-center rounded">Submit</div>
                </div>
            </div>
        </div>
    )
}