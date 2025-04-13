import { Page } from "@/components/page";
import Table from "./table";

export default function Courses() {
  return (
    <Page.Root>
      <Page.Header>Header</Page.Header>
      <Page.Content>
        <Table />
      </Page.Content>
    </Page.Root>
  );
}
