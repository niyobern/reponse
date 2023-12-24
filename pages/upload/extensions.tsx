import { useEffect, useState } from "react";

export default function AddExtension(){
    const [images, setImages] = useState<File[]>([])
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
                  close.style.width = String(rect.width) + "px"
                  close.style.height = String(rect.height) + "px"
                  close.style.top = String(rect.top) + "px"
                  close.style.left = String(rect.left) + "px"
                  close.style.position = "absolute"
                  // close.classList.add("absolute", `top-[${rect.top}px] left-[${rect.left}px]`)
                  close.classList.add("bg-blue-600", "z-50", "opacity-50")
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
    return (
        <div className="flex flex-col p-2 md:p-6">
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-blue-900 font-medium w-fit">Add Extension</h1>
                {/* Form */}
                <div className="w-full md:w-2/3 lg:w-1/2 bg-gray-100 p-2 md:p-3">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="title" className="text-sm">Title</label>
                        <input id="title" name="title" type="text" placeholder="Title"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="content" className="text-sm">content</label>
                        <textarea className="h-20" id="content" name="content" placeholder="content"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <input accept="image/*" type="file" id="files" multiple={true} onChange={handleFileSelect}/>
                        <output className="flex flex-wrap" id="list"></output>
                    </div>
                </div>
            </div>
        </div>
    )
}