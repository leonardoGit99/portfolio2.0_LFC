"use client";
import React from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "@/lib/utils";
import { IoChatbox, IoCheckmarkCircle } from 'react-icons/io5';
import { TextArea } from "./ui/textarea";

type SendState = {
  loading: boolean;
  success: boolean;
  error: boolean;
};

type ContactFormProps = {
  sendState: SendState;
  setSendState: React.Dispatch<React.SetStateAction<SendState>>;
};

type DrawerProps = {
  onClose: () => void;
}

type Props = DrawerProps & ContactFormProps;
export function ContactForm({ sendState, setSendState, onClose }: Props) {
  const [data, setData] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: ""
  })


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Activa loading al iniciar
    setSendState({
      loading: true,
      success: false,
      error: false
    });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        setData({
          firstname: "",
          lastname: "",
          email: "",
          subject: "",
          message: ""
        });

        setSendState({
          loading: false,
          success: true,
          error: false
        });

        onClose();
      } else {
        setSendState({
          loading: false,
          success: false,
          error: true
        });
      }
    } catch (error) {
      console.error("Error sending contact form:", error);
      setSendState({
        loading: false,
        success: false,
        error: true
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }
  return (
    <div className="shadow-input mx-auto w-full h-full max-w-xxl rounded-none bg-white p-4 pt-10  md:p-10 md:pt-16 dark:bg-black">
      <div className="flex items-center  space-x-2">
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
          Contact me
        </h2>
        <IoChatbox className="text-[#00C6FF]" />
      </div>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-500">
        Feel free to reach out for collaborations, freelance work, or just to say hi!
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" name="firstname" placeholder="Leonardo" type="text" value={data.firstname} onChange={(e) => { handleInputChange(e) }} disabled={sendState.loading || sendState.success} />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" name="lastname" placeholder="Fuentes Claros" type="text" value={data.lastname} onChange={(e) => { handleInputChange(e) }} disabled={sendState.loading || sendState.success} />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email address</Label>
          <Input id="email" name="email" placeholder="leonardofuentesclaros@gmail.com" type="email" value={data.email} onChange={(e) => { handleInputChange(e) }} disabled={sendState.loading || sendState.success} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" name="subject" placeholder="I require your services to develop..." type="text" value={data.subject} onChange={(e) => { handleInputChange(e) }}
            disabled={sendState.loading || sendState.success} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="message">Message</Label>
          <TextArea
            id="message"
            name="message"
            placeholder="Hey, I want to work together due to..."
            value={data.message}
            className="h-32"
            onChange={(e) => { handleInputChange(e) }}
            disabled={sendState.loading || sendState.success}
          />
        </LabelInputContainer>

        <button
          className={cn(
            "relative block h-10 w-full rounded-md font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]",
            sendState.loading || sendState.success
              ? "bg-violet-500 cursor-not-allowed pointer-events-none"
              : "group/btn bg-gradient-to-br from-black to-neutral-600 dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900"
          )}
          type="submit"
          disabled={sendState.loading || sendState.success}
        >
          {sendState.success ? (
            <span className="flex items-center justify-center gap-2">
              Message sent!
              <IoCheckmarkCircle className="text-green-300" />
            </span>)
            : sendState.loading
              ? "Sending..."
              : "Send Message"}
          <BottomGradient sendState={sendState} />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
      </form>
    </div>
  );
}

const BottomGradient = ({ sendState }: { sendState: { loading: boolean; success: boolean } }) => {
  const disabled = sendState.loading || sendState.success;
  if (disabled) return null;
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-violet-400 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
