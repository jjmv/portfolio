import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Javier Moreno" }];

export default function Index() {
  return <h1 className="text-primary">Personal Portfolio Javier Moreno</h1>;
}
