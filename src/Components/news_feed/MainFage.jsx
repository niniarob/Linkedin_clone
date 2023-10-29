import React, { useRef } from 'react';
import './MainFage.css';
import Assets from './assets/Logo 1.png';
// import Assets from './assets/Logo 1.png';




export default function FileUpload() {
    const fileInputRef = useRef(null);
  
    const handleFileUpload = () => {
      fileInputRef.current.click();
    };
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        console.log("Selected File:", file);
      }
    };

  return (
    <div className='impDiv'>
      <header>
        <img className='logoImage' src={Assets} alt="Logo 1" />
        <div className='headerLinks'>
          <ul>
            <li className='pseudoElement'>Home</li>
            <li>My Network</li>
            <li>Jobs</li>
            <li>Messaging</li>
            <li>Notifications</li>
          </ul>
        <div>
          <button className='buttonImg' onClick={handleFileUpload}></button>
        <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
        </div>
        </div>
      </header>








      <main>
        <div>
            <div className='userInformation'>
                <div className='users'>
                  <div className='userPhotoName'>
                    <div className='userPhoto'></div>
                    <h className='userName'>Nino Robakidze</h>
                  </div>
                  <div className='line'></div>
                  <div className='userInformation-paragraphs'>
                    <p>Who’s viewed your profile</p>
                    <p>Impressions of your post</p>
                  </div>
                  <div className='line secondGrayLine'></div> 
                  <div className='userInformation-paragraphs'>
                    <p>My items</p>
                    <p>Invitations</p>
                    <p>Groups</p>
                    <p>Events</p>
                    <p>Followed Hashtags</p>
                  </div> 
                </div>
            </div>
            <div>
              <h4>Access exclusive tools & insights</h4>
              
            </div>
        </div>
        <div></div>
        <div></div>

      </main>
    </div>
  );
}














// import React, { useState } from 'react';

// export default function FileUpload() {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setSelectedFile(file);
//   };

//   const handleFileUpload = () => {
//     if (selectedFile) {
//       const formData = new FormData();
//       formData.append('file', selectedFile);

//       // Replace 'your-upload-endpoint' with the actual URL where you want to upload the file.
//       fetch('your-upload-endpoint', {
//         method: 'POST',
//         body: formData,
//       })
//         .then((response) => {
//           if (response.ok) {
//             // File uploaded successfully
//             console.log('File uploaded successfully');
//           } else {
//             // Handle the error
//             console.error('File upload failed');
//           }
//         })
//         .catch((error) => {
//           console.error('Error:', error);
//         });
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleFileUpload}>Upload</button>
//     </div>
//   );
// }
