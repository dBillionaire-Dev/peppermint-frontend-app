import Layout from "@/components/layouts";
import TopBar from "@/components/ask-stream/top-bar"
import { Dashboard } from "@/components/ask-stream";

export default function Streams() {
  return (
    <Layout>
      <TopBar />
      <Dashboard />
    </Layout>
  );
}