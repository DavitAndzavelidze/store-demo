import React from "react";
import {
  Tabs,
  Tab,
  Input,
  Link,
  Button,
  Card,
  CardBody,
} from "@nextui-org/react";
import Image from "next/image";
import GoogleLogo from "@/public/google.svg";

export default function RegForm() {
  const [selected, setSelected] = React.useState("login");

  const handleTabChange = (key: string | number) => {
    setSelected(String(key));
  };

  return (
    <div className="flex flex-col justify-center items-center w-full pt-12 pb-1">
      <Card className="max-w-full w-[440px] h-[400px] ">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={handleTabChange}
          >
            <Tab key="login" title="Login">
              <form className="flex flex-col gap-4">
                <Input
                  isRequired
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                />
                <p className="text-center text-small">
                  Need to create an account?{" "}
                  <Link
                    size="sm"
                    onPress={() => setSelected("sign-up")}
                    className="cursor-pointer"
                  >
                    Sign up
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary">
                    Login
                  </Button>
                </div>
              </form>
              <div className="flex justify-center items-center gap-4 bg-slate-200 rounded-lg py-2 my-4 cursor-pointer hover:bg-slate-300 duration-150">
                <Image
                  src={GoogleLogo}
                  width={20}
                  height={20}
                  alt="googleLogo"
                />
                <h3 className="text-[15px]">Login with Google</h3>
              </div>
            </Tab>
            <Tab key="sign-up" title="Sign up">
              <form className="flex flex-col gap-4 h-[300px]">
                <Input
                  isRequired
                  label="Name"
                  placeholder="Enter your name"
                  type="password"
                />
                <Input
                  isRequired
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                />
                <p className="text-center text-small">
                  Already have an account?{" "}
                  <Link
                    size="sm"
                    onPress={() => setSelected("login")}
                    className="cursor-pointer"
                  >
                    Login
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary">
                    Sign up
                  </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}
