import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

function ContactForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = async (data) => {
    await emailjs
      .send("service_yz9jl5r", "template_gu4od95", data, "DlAxeztiF9Ge1yK6x")
      .then(
        (result) => {
          console.log("result => " + result.text);
          navigate("/EmailSended")
        },
        (error) => {
          console.log("error => " + error.text);
        }
      );
  };
  return (
    <Container>
      <div className="my-5 p-5 shadow-lg rounded">
        <Form
          className="needs-validation"
          noValidate
          onSubmit={handleSubmit(formSubmit)}
        >
          <h3 className="text-center py-5">Contact Us</h3>
          <FloatingLabel
            controlId="floatingInput"
            label="Name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="user_name"
              placeholder="aaabbb"
              {...register("name", { required: true })}
              aria-invalid={errors.name ? "true" : "false"}
              isInvalid={errors.name}
            />
          </FloatingLabel>
          {errors.name?.type === "required" && (
            <p role="alert" className="text-danger">
              {" "}
              Name is required
            </p>
          )}
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              name="user_email"
              placeholder="name@example.com"
              {...register(
                "email",
                { required: true },

                {
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                }
              )}
              aria-invalid={errors.emil ? "true" : "false"}
              isInvalid={errors.email}
            />
          </FloatingLabel>
          {errors.email?.type === "pattern" && (
            <p role="alert" className="text-danger">
              Not a valid emil
            </p>
          )}
          {errors.email?.type === "required" && (
            <p role="alert" className="text-danger">
              Email is required
            </p>
          )}

          <FloatingLabel
            controlId="floatingInput"
            label="Phone number"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="1234"
              name="phone_no"
              {...register(
                "phoneNo",
                { required: true },
                { pattern: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/ }
              )}
              aria-invalid={errors.phoneNo ? "true" : "false"}
              isInvalid={errors.phoneNo}
            />
            {errors.phoneNo?.type === "required" && (
              <p role="alert" className="text-danger">
                {" "}
                Phone number is required
              </p>
            )}
            {errors.phoneNo?.type === "pattern" && (
              <p role="alert" className="text-danger">
                Not a valid phone number
              </p>
            )}
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingSelect"
            label="Type of enquery "
            className="mb-3"
          >
            <Form.Select {...register("enquery")}>
              <option value="Digital services">Digital services</option>
              <option value="Application development">
                Application development
              </option>
              <option value="Support services">Support services</option>
            </Form.Select>
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTextarea2"
            label="Message"
            className="mb-3"
          >
            <Form.Control
              as="textarea"
              name="message"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
              {...register("message")}
            />
          </FloatingLabel>

          <Button
            variant="primary"
            type="submit"
            className="d-grid gap-2 mx-auto my-3 px-5"
          >
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default ContactForm;
