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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function AddNewClassPage() {
  return (
    <Card className="w-full max-w-lg m-auto h-full shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Add New Course</CardTitle>
        <CardDescription className="text-center">
          {`Effortlessly design new courses tailored to your organization's needs.`}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Course Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter Course Name"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="course-code">Course Code</Label>
            <Input id="course-code" placeholder="CSE-1234" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="course-credit">Course Credit</Label>
            <Input id="course-credit" placeholder="0.00" required />
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="tuitionFee">Course Type</Label>
          <RadioGroup defaultValue="major" className="flex gap-10">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="major" id="major" />
              <Label htmlFor="major">Major</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="non-major" id="non-major" />
              <Label htmlFor="non-major">Non-major</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="assignedTeacher">Assigned Teacher</Label>
          <Input
            id="assignedTeacher"
            type="text"
            placeholder="Mr. X"
            required
          />
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
