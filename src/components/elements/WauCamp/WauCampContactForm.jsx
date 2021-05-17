import React from "react";
import { Link } from "gatsby";
import { Input, Checkbox } from "antd";
import styled from "styled-components";
import { motion } from "framer-motion";
import tw from "twin.macro";

const { TextArea } = Input;

const WauCampContactFormContainer = styled.div`
  position: relative;
  width: 100%;
  letter-spacing: 0;

  h2 {
    font-weight: 400;
    font-size: 0.8rem;
  }
  form,
  input,
  textarea,
  .MuiFormControl-root {
    width: 100% !important;
  }

  form {
    ${tw`lg:(grid grid-cols-2 column-gap[1rem])`}
  }

  textarea {
    ${tw`lg:col-span-2`}
  }

  input,
  textarea {
    ${tw`p-4 mb-4`}
  }

  .MuiInputBase-input,
  .MuiInput-input,
  .MuiFormLabel-root,
  p {
    color: #000;
    font-size: 0.75rem !important;
    font-weight: 800;
    letter-spacing: 0.03rem;
  }

  .MuiFormLabel-root.Mui-focused,
  .MuiInput-underline:after,
  .MuiCheckbox-colorSecondary.Mui-checked,
  .MuiTouchRipple-root,
  .MuiTouchRipple-root * {
    color: #000;
  }

  .MuiIconButton-root,
  .PrivateSwitchBase-root-1 {
    padding: 0;
  }

  .MuiTouchRipple-root {
    display: none !important;

    * {
      display: none !important;
    }
  }

  .MuiSvgIcon-root {
    margin-left: -5px;
    transform: scale(0.65);
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  .form-disclaimer {
    margin-top: 6px;
    display: flex;
    min-height: 40px;

    p {
      margin: 0 0 2px 0;
      line-height: 110%;
    }

    .privacy-check {
      display: flex;
      align-items: center;

      .ant-checkbox-wrapper {
        ${tw`flex items-center`}

        .ant-checkbox {
          ${tw`flex items-center mr-2`}
          width: 16px;
          height: 16px;
        }

        p {
          margin: 0;
          ${tw`font-light`}
        }
        input {
          display: inline;
          padding: 0;
          margin: 0;
        }
      }
    }

    .required-label {
      text-align: right;
    }
  }

  button {
    float: right;
    font-weight: 800;
    letter-spacing: 0.02rem;
    background: #000;
    color: #fff;
    padding: 15px 20px;
    border: none;
    box-shadow: none;
    border-radius: 0;
    display: flex;
    pointer-event: auto;
    justify-content: center;
  }
`;

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class WauCampContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      cognome: "",
      email: "",
      nascita: "",
      messaggio: "",
      btn: props.lang === "it" ? "Invia" : "Send",
      feedback: "",
      error: "",
      loading: false,
      lang: props.lang,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    this.setState({ loading: true });
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "WAU-Camp", ...this.state }),
    })
      .then(() => {
        this.setState({
          feedback: "Messaggio inviato",
          loading: false,
          nome: "",
          cognome: "",
          nascita: "",
          messaggio: "",
          email: "",
        });
        // setTimeout(() => {
        //   this.setState(
        //     {
        //       feedback: "",
        //     }
        //   )
        // }, 3000);
      })
      .catch((error) => {
        this.setState({ error: error, loading: false });
      });

    e.preventDefault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const {
      nome,
      cognome,
      nascita,
      email,
      messaggio,
      btn,
      feedback,
      error,
      loading,
    } = this.state;

    return (
      <WauCampContactFormContainer>
        {!!feedback ? (
          <motion.span
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            tw="w-full h-full text-center flex items-center justify-center"
          >
            {feedback}
          </motion.span>
        ) : (
          <form
            onSubmit={this.handleSubmit}
            name="WAU-Camp"
            method="POST"
            data-netlify="true"
          >
            <input
              type="hidden"
              name="form-name"
              value="WAU-Camp"
              netlify-honeypot="bot-field"
              hidden
            />

            <Input
              placeholder={this.props.lang === "it" ? "Nome *" : "First Name *"}
              type="text"
              label="Nome"
              name="nome"
              value={nome}
              required
              onChange={this.handleChange}
            />
            <Input
              placeholder={
                this.props.lang === "it" ? "Cognome *" : "Last Name *"
              }
              type="text"
              label="Cognome"
              name="cognome"
              value={cognome}
              required
              onChange={this.handleChange}
            />
            <Input
              placeholder="Email *"
              type="email"
              label="Email"
              name="email"
              value={email}
              required
              onChange={this.handleChange}
            />
            <Input
              placeholder="Data di nascita *"
              type="data-di-nascita"
              label="Data di nascita"
              name="nascita"
              value={nascita}
              onChange={this.handleChange}
            />
            <TextArea
              placeholder={
                this.props.lang === "it" ? "Messaggio *" : "Message *"
              }
              label="Messaggio"
              name="messaggio"
              value={messaggio}
              required
              onChange={this.handleChange}
              rows={4}
            />
            <div tw="flex flex-col md:flex-row col-span-2">
              <div
                className="form-disclaimer"
                tw="mb-4 w-full md:w-3/4 flex flex-col items-start justify-start"
              >
                <div className="privacy-check" tw="mb-4">
                  <Checkbox
                    value="checkedA"
                    onChange={this.handleChange}
                    required
                    inputProps={{ "aria-label": "Checkbox A" }}
                  >
                    {this.props.lang === "it" ? (
                      <p>
                        Ho letto e accettato l’
                        <Link to="/privacy-policy">
                          informativa sulla privacy
                        </Link>
                        .*
                      </p>
                    ) : (
                      <p>
                        I read and accepted the{" "}
                        <Link to="/privacy">Privacy Policy</Link>.*
                      </p>
                    )}
                  </Checkbox>
                </div>
                <div className="required-label">
                  <p>* Campi obbligatori</p>
                </div>
              </div>
              <div tw="flex-grow">
                <button
                  type="submit"
                  tw="w-full text-center flex justify-center opacity-80 hover:opacity-100 cursor-pointer"
                >
                  {
                    // check if loading or success
                    loading ? "loading" : btn
                  }
                </button>
              </div>
            </div>
          </form>
        )}

        {error && (
          <FormErrorComponent>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: [0, 0, 0, 1], duration: 0.5 }}
            >
              {error}
            </motion.p>
          </FormErrorComponent>
        )}
      </WauCampContactFormContainer>
    );
  }
}

const FormErrorComponent = styled.div`
  position: absolute;
  bottom: -0.75rem;

  * {
    font-weight: 800;
    font-family: "ff-real-text-pro", sans-serif !important;
    font-size: 1rem !important;
    letter-spacing: -0.01rem !important;
  }
`;

// eslint-disable-next-line import/no-default-export
export default WauCampContactForm;
