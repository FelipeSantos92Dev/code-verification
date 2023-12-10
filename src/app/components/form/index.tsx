import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function FormComplete() {
  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="space-y-4">
        <CardHeader>
          <CardTitle>Verification Form</CardTitle>
          <CardDescription>
            Please enter your details for verification.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="initial-input">Initial Input</Label>
            <Input id="initial-input" placeholder="Enter your input" />
            <Button className="w-full" type="submit">
              Verify
            </Button>
          </div>
          <div className="border-t pt-4 space-y-2">
            <Label htmlFor="second-input">Second Input</Label>
            <Input id="second-input" placeholder="Enter your input" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="third-input">Third Input</Label>
            <Input id="third-input" placeholder="Enter your input" />
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
