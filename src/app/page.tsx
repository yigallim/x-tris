import React from "react";
import delay from "@/utils/delay";
import { redirect } from "next/navigation";
import SubmitButton from "@/components/global/submit-button";

const Login = () => {
  const isLogin = true;
  const username = "MockUsername";

  const handleSignUpOrLogin = async () => {
    "use server";
    await delay(300);
    redirect("/lobby");
  };

  const handleLogin = async (formData: FormData) => {
    "use server";
    await delay(300);

    const action = formData.get("action");
    if (action == "join") {
      redirect("/lobby");
    } else {
      redirect("/logout");
    }
  };

  return (
    <div className="h-full w-full grid place-items-center">
      <div className="text-white glass-container w-[700px] font-medium rounded-lg overflow-hidden">
        {isLogin ? (
          <>
            <div className="pt-4 pb-3 px-5">
              <p className="text-2xl mb-3">WELCOME BACK TO XTRIS!</p>
              <p className="text-lg text-neutral-400">Is this you?</p>
              <p className="text-3xl font-semibold">{username}</p>
            </div>
            <form
              action={handleLogin}
              className="flex p-2 bg-neutral-300/10 backdrop-blur-md text-lg"
            >
              <SubmitButton
                className="bg-neutral-300 text-black shadow w-[250px] mr-2 rounded py-1.5"
                pendingClassName="darken"
                name="action"
                value="logout"
              >
                LOG OUT
              </SubmitButton>
              <SubmitButton
                className="bg-blue-600 text-neutral-200 shadow flex-1 rounded py-1.5"
                pendingClassName="darken"
                name="action"
                value="join"
              >
                JOIN
              </SubmitButton>
            </form>
          </>
        ) : (
          <>
            <form action={handleSignUpOrLogin} className="py-4 px-5">
              <p className="text-2xl mb-3">WELCOME TO XTRIS!</p>
              <p className="text-neutral-400 my-1">
                Enter a username to join, or leave it blank to play as guest.
              </p>

              <input
                type="text"
                className="py-1.5 px-4 bg-neutral-700 rounded w-full"
                placeholder="Username"
              />
              <SubmitButton
                className="bg-blue-600 text-neutral-200 flex-1 rounded py-1.5 w-full mt-4"
                pendingClassName="darken"
              >
                JOIN
              </SubmitButton>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
