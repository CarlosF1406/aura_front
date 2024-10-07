import {Avatar} from "@nextui-org/react";
function App() {

  return (
    <>
      <h1 className="text-3x1 font-bold underline">
        Testing
      </h1>
      <div className="flex gap-3 items-center">
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <Avatar name="Junior" />
      </div>
    </>
  )
}

export default App
