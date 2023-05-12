import { useState } from "react";
import Login from "../components/Login/login";
import Register from "../components/Register";

function LoginPage() {
  const [isRegister, setIsRegister] = useState("");

  const handleRegister = () => {
    setIsRegister((prev) => {
      return !prev;
    });
  };

  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <section className="lg:col-span-1 flex bg-background min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        {isRegister ? (
          <Register handleRegister={handleRegister} />
        ) : (
          <Login handleRegister={handleRegister} />
        )}
      </section>
      <section className="hidden lg:block lg:col-span-1">
        <img
          className="h-screen object-cover"
          src="/JS_Simple.png"
          alt="DeatCodeImage"
        />
      </section>
    </main>
  );
}

export default LoginPage;
