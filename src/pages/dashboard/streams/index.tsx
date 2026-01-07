import Layout from "@/components/layouts";
import NavBar from "@/components/ask-stream/Navbar"
import { Dashboard } from "@/components/ask-stream";

export default function Streams() {
  return (
    <Layout>
      <NavBar />
      <Dashboard />
    </Layout>
  );
}