import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | error

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};
    if (!email) newErrors.email = "Email is required.";
    if (!password) newErrors.password = "Password is required.";
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setStatus("loading");
    setTimeout(() => {
      if (email.includes("@")) {
        setStatus("idle");
        navigate("/dashboard");
      } else {
        setStatus("error");
      }
    }, 700);
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <h1 className="mb-1 text-xl font-semibold text-slate-900">
          Municipal Archive Login
        </h1>
        <p className="mb-4 text-sm text-slate-600">
          Sign in with your municipal account.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />
          {status === "error" && (
            <p className="text-sm text-red-600">
              Invalid credentials. Please try again.
            </p>
          )}
          <Button type="submit" className="w-full">
            {status === "loading" ? "Signing in..." : "Sign In"}
          </Button>
        </form>
        <p className="mt-3 text-center text-xs text-slate-500">
          Forgot password? Contact IT department.
        </p>
      </div>
    </div>
  );
}
