export default function User()
{
    console.log("I am a function called with Default ");
    return "I am through return";
}

export function WithoutDefault(){
    console.log("I am a function called without Default ")
}

export let variable="I am a variable inside module.js";

export class ImClass 
{
    classFunc() 
    {
        console.log("I am a class called without Default ")
    }
}

export class ImAnotherClass 
{
    classFunc() 
    {
        console.log("I am a another class called without Default ")
    }
}
export let obj1=new ImAnotherClass();