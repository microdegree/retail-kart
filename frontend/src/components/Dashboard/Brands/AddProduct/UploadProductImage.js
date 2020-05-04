import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from "react-bootstrap/Row";
const UploadProductImage = (props) => {

    const [value, setValue] = useState()


    const handleChange = (e) => {
        setValue(e.target.files[0]); // you get all the files object here
    }

    const uploadImageInServer = (e) => {
        e.preventDefault();
        console.log('In uploadImageInServer 1')
        const formData = new FormData();
        formData.append('avatar', value)

        fetch('/api/admin/uploadProjectImage', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                console.log('upload success')
                // props.history.push('./myProjects')

                props.history.push({
                    pathname: './createJobOpenings',
                    fileNameImage: data.uploadedFileName
                })

            })
            .catch(error => {
                console.error(error)
            })

    }

    return (
        <div>
            <center>
                <Card style={{ width: '48rem', backgroundColor: '#196DFD',marginTop:'20px' }}>
                    <Card.Body>
                        <Card.Title style={{ color:'#fff' }}>Upload Product Image</Card.Title>
                        <Col >
      <Image src="https://www.3dcart.com/2015/images/features/product-management/product-management-software.png" style={{ width: '550px', height: '#550px' }} />
    </Col><br /><br /><br />
                        <form encType="multipart/form-data" onSubmit={uploadImageInServer}>
                            <label for="avatar" style={{ color:'#fff' }}>Select image:&nbsp;&nbsp;  </label>
                            <input type="file" style={{ color:'#fff' }} id="avatar" name="avatar" accept="image/*,video/*" onChange={handleChange} />

                        &nbsp;&nbsp; <Button style={{ backgroundColor: '#fff',color:'#0341AC'}} type="submit">SUBMIT</Button>
                        </form>
                    </Card.Body>
                </Card>

            </center>
        </div>
    )





}

export default UploadProductImage
