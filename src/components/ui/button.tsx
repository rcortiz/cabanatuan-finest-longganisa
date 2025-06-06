import React from "react";

export default function Button({ label }: { label: string }) {
  return <button className="btn btn-outline btn-primary">{label}</button>;
}
