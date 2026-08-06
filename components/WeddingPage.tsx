"use client";

import { useState } from "react";
import Envelope from "./sections/Envelope";
import Invitation from "./sections/Invitation";

export default function WeddingPage() {
  const [opened, setOpened] = useState(false);
  const [showInvitation, setShowInvitation] = useState(false);

  const openEnvelope = () => {
    setOpened(true);

    setTimeout(() => {
      setShowInvitation(true);
    }, 1800);
  };

  return (
    <>
      {!showInvitation ? (
        <Envelope opened={opened} onOpen={openEnvelope} />
      ) : (
        <Invitation />
      )}
    </>
  );
}