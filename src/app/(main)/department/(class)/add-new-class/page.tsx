import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TiPlus } from "react-icons/ti";

export default function AddNewClassPage() {
  return (
    <Card className="w-full max-w-lg m-auto h-full shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Add New Class</CardTitle>
        <CardDescription className="text-center">
          Streamline your departmental structure effortlessly.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Class Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter class Name"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="tuitionFee">Tuition Fee</Label>
          <Input id="tuitionFee" type="number" placeholder="4000" required />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="ml-auto">
          <TiPlus className="mr-2" />
          Create
        </Button>
      </CardFooter>
    </Card>
  );
}
