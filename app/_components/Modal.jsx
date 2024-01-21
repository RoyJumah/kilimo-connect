import { Auth } from "@supabase/auth-ui-react";
import { useEffect, useState } from "react";
import supabase from "../_services/supabase";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import Link from "next/link";

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
    <ModalText
      text="Sign in to Kilimo Connect"
      email={email}
      setEmail={setEmail}
      handleSignIn={handleSignIn}
      isEmailValid={isEmailValid}
      isSendingMagicLink={isSendingMagicLink}
      magicLinkSent={magicLinkSent}
    />
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
  <div>
    <div className="flex flex-col gap-2 p-4 text-center text-[14px] tracking-wide">
      <h2>{text}</h2>
      <Link className="hover:underline" href="/">
        Switch to agent sign-in &rarr;
      </Link>
    </div>

    <div className="flex gap-6">
      <div className="w-[50%]">
        <Auth
          onlyThirdPartyProviders
          supabaseClient={supabase}
          providers={["google", "github"]}
          appearance={{ theme: ThemeSupa }}
        />
      </div>

      <div className="w-[50%]">
        <h3 className="text-[14px]">With magic email link:</h3>
        <div className="space-y-4">
          <div>
            <p className="block text-[14px] leading-6">Email</p>
            <div className="mt-1">
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
            <p className="text-[14px] text-green-500">
              Magic signin link sent to {email}
            </p>
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
              {isSendingMagicLink
                ? "Sending..."
                : magicLinkSent
                  ? "Sent"
                  : "Send"}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Modal;
