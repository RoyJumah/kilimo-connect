import { Auth } from "@supabase/auth-ui-react";
import { useEffect, useState } from "react";
import supabase from "../_services/supabase";
import { ThemeSupa } from "@supabase/auth-ui-shared";

function Modal() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isSendingMagicLink, setIsSendingMagicLink] = useState(false);
  const [magicLinkSent, setMagicLinkSent] = useState(false);

  useEffect(() => {
    setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
  }, [email]);

  async function handleSignIn() {
    try {
      setIsSendingMagicLink(true); // Set loading state to true
      //eslint-disable-next-line
      const { data, error } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
          emailRedirectTo: "http://localhost:3000",
        },
      });
      // Handle the response as needed
      setMagicLinkSent(true); // Set magic link sent state to true
    } finally {
      setIsSendingMagicLink(false); // Set loading state to false, whether success or failure
    }
  }

  return (
    <>
      <div>
        <ModalText
          text="Login"
          email={email}
          setEmail={setEmail}
          handleSignIn={handleSignIn}
          isEmailValid={isEmailValid}
          isSendingMagicLink={isSendingMagicLink}
          magicLinkSent={magicLinkSent}
        />
      </div>
    </>
  );
}
const ModalText = ({
  text,
  email,
  setEmail,
  handleSignIn,
  isEmailValid,
  isSendingMagicLink,
  magicLinkSent,
}) => (
  <div className="modal-text flex flex-col gap-2 tracking-wide ">
    <h2 className="text-[2rem] font-[700] capitalize ">{text}</h2>
    <h3 className="t font-semibold">With magic email link:</h3>
    <div className="space-y-4">
      <div>
        <p className="block text-[14px] font-semibold leading-6">Email</p>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={`input  ${isEmailValid ? "valid-email" : "touched"}`}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
      </div>

      {magicLinkSent && (
        <p className="text-green-500">Magic signin link sent to {email}</p>
      )}

      <div>
        <button
          onClick={() => handleSignIn()}
          type="button"
          className={`btn text-xs tracking-wide ${
            isEmailValid ? "" : "disabled"
          }`}
          disabled={isSendingMagicLink || magicLinkSent} // Disable the button when sending the magic link or already sent
        >
          {isSendingMagicLink ? "Sending..." : magicLinkSent ? "Sent" : "Send"}
        </button>
      </div>
    </div>

    <p className="font-semibold ">Or with account:</p>
    <Auth
      onlyThirdPartyProviders
      supabaseClient={supabase}
      providers={["google", "github"]}
      appearance={{ theme: ThemeSupa }}
    />
  </div>
);

export default Modal;
