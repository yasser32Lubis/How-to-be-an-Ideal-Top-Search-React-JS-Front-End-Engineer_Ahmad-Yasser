import React from "react";
import { Button, Stack, Form } from "react-bootstrap";
import '../css/FormPage.css';

const FormPage = (
  {
    email,
    name,
    nohp,
    comment,
    kelasKoding,
    pendidikan,
    isNoHpError,
    isEmailError,
    
    handleChange,
    handleSubmit
  }
) => {
  return (
    <div className="">
      <div className="form-container">
        <Stack gap={2}>
          <h2 className="d-flex justify-content-center">Form Registrasi</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 d-flex flex-column align-items-start">
              <Form.Label>Name Lengkap :</Form.Label>
              <Form.Control
                name="name"
                type="string"
                value={name}
                onChange={(ev) => handleChange(ev)}
                required
                placeholder="ex: Dery"
              />
              
            </Form.Group>
            <Form.Group className="mb-3 d-flex flex-column align-items-start">
              <Form.Label>Email :</Form.Label>
              <Form.Control
                name="email"
                type="email"
                value={email}
                onChange={(ev) => handleChange(ev)}
                required
                placeholder="ex: test@gmail.com"
              />
            </Form.Group>
            <Form.Group className="mb-3 d-flex flex-column align-items-start" >
              <Form.Label>No Handphone :</Form.Label>
              <Form.Control
                name="nohp"
                type="number"
                value={nohp}
                required
                onChange={(ev) => handleChange(ev)}
              />
              
            </Form.Group>
            <Form.Group className="mb-3 d-flex flex-column align-items-start" >
              <Form.Label>Latar Belakang Pendidikan :</Form.Label>
              <Stack gap={2} direction="horizontal">
                <Form.Check
                  name="pendidikan"
                  type="radio"
                  label="IT"
                  value="IT"
                  required
                  onChange={(ev) => handleChange(ev)}
                />
                <Form.Check
                  name="pendidikan"
                  type="radio"
                  label="Non IT"
                  value="Non IT"
                  required
                  onChange={(ev) => handleChange(ev)}
                />
              </Stack>
            </Form.Group >
            <Form.Group className="mb-3 d-flex flex-column align-items-start">
            <Form.Label>Kelas koding yang dipilih:</Form.Label>
                <Form.Select aria-label="Default select example" onChange={(ev) => handleChange(ev)}>
                    <option>Pilih Salah Satu Program </option>
                    <option name="kelasKoding" value="Golang">Coding Backend with Golang</option>
                    <option name="kelasKoding" value="ReactJs">Coding Frontend with ReactJs</option>
                    <option name="kelasKoding" value="Fullstack">Fullstack Developer</option>
                </Form.Select>
            </Form.Group >
            <Form.Group className="mb-3 d-flex flex-column align-items-start w-50">
              <Form.Label>Foto Surat Kesungguhan :</Form.Label>
              <Form.Control
                type="file"
                required
                name="file"
                onChange={(ev) => handleChange(ev)}
              />
            </Form.Group>
            <Form.Group className="mb-3 d-flex flex-column align-items-start">
            <Form.Label>Harapan buat Bootcamp ini :</Form.Label>
              <Form.Control
                name="comment"
                value={Comment}
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '100px' }}
                onChange={(ev) => handleChange(ev)}
              />
            </Form.Group>
            <div className="mb-3 d-flex flex-column align-items-center">
              {/* {
                isNameError && (
                  <Form.Text className="text-error">
                    * Nama lengkap harus berupa huruf
                  </Form.Text>
                )
              } */}
              {
                isEmailError && (
                  <Form.Text className="text-error">
                    * Email tidak boleh kosong
                  </Form.Text>
                )
              }
              {
                isNoHpError && (
                  <Form.Text className="text-error">
                    No Handphone Tidak sesuai
                  </Form.Text>
                )
              }
            </div>
            <div className="buton d-flex flex-row justify-content-start">
              <div>
                <Button variant="success" type="submit">
                  Submit
                </Button>
              </div>
              <div>
                <Button variant="danger" type="reset">
                  Reset
                </Button>
              </div>
            </div>
            
          </Form>
        </Stack>
      </div>
    </div>
    
    
  )
}

export default FormPage;
