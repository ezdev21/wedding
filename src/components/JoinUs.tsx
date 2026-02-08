import { useState, type FormEvent } from "react";
import Container from "./Container";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export default function JoinUs() {
  const [name, setName] = useState("");
  const [attend, setAttend] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

   const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name,
          attend,
          message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setName("");
      setMessage("");
      setAttend("");
      toast.success("Message sent successfully!",{
        position: "bottom-right",
        richColors: true
      });
    } catch (error: unknown) {
      console.error("Error sending email:", error);
      toast.error("Something went wrong. Please try again ❌",{
        position: "bottom-right",
        richColors: true
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#8B4A05] py-8">
      <Container>
        <div className="mx-auto max-w-3xl text-center text-[#F5E6C8]">
          <h2 className="mb-10 font-serif text-3xl tracking-wide">
            JOIN US
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8 text-left">
            {/* Name */}
            <div>
              <label className="mb-2 block font-serif uppercase tracking-wide">
                Name
              </label>
              <input
                type="text"
                required
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Your Full Name"
                className="w-full rounded-md bg-white px-4 py-3 text-gray-700 outline-none focus:ring-2 focus:ring-[#F5E6C8]"
              />
            </div>

            {/* Attendance */}
            <div>
              <p className="mb-3 font-serif uppercase tracking-wide">
                Will you attend Michael Abebe and Erkibe Temesgen Wedding? <span className="text-red-500">*</span>
              </p>

              <div className="space-y-2">
                <label className="flex items-center gap-3 font-serif">
                  <input
                    type="radio"
                    name="attend"
                    className="h-4 w-4 accent-[#F5E6C8]"
                    onChange={(e) => setAttend(e.target.value)}
                  />
                  Yes
                </label>

                <label className="flex items-center gap-3 font-serif">
                  <input
                    type="radio"
                    name="attend"
                    className="h-4 w-4 accent-[#F5E6C8]"
                    onChange={(e) => setAttend(e.target.value)}
                  />
                  No
                </label>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block font-serif uppercase tracking-wide">
                Message for Michael Abebe & Erkibe Temesgen
              </label>
              <textarea
                rows={6}
                required
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message for newlyweds couples"
                className="w-full resize-none rounded-md bg-white px-4 py-3 text-gray-700 outline-none focus:ring-2 focus:ring-[#F5E6C8]"
              />
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="rounded-md bg-[#F5E6C8] px-10 py-3 font-serif tracking-wide text-[#8B4A05] shadow-md transition hover:bg-[#ecd9b5]"
              >
                {loading ? "Please Wait..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
