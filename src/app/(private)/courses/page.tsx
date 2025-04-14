import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Page } from "@/components/page";
import Icon from "@/components/Icon";

import { Table } from "./table";

export default function Courses() {
  return (
    <Page.Root>
      <Page.Header>
        <Input
          className="w-60"
          icon={<Icon.Search className="text-gray-400" />}
        />
        <Page.Actions>
          <Button startIcon={<Icon.CirclePlus />}>Novo curso</Button>
        </Page.Actions>
      </Page.Header>
      <Page.Content>
        <Table />
      </Page.Content>
    </Page.Root>
  );
}
