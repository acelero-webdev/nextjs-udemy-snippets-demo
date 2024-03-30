import { db } from "@/db";
import { redirect } from "next/navigation";

export default function SnippetCreatePage() {
    async function createSnippet(formData: FormData) {
        // This needs to be a server action
        'use server';

        // Validate the input
        const title = formData.get('title') as string;
        const code = formData.get('code') as string;

        // Create a new record with the user input
        const snippet = await db.snippet.create({
            data: {
                title,
                code
            }
        });

        console.log(snippet);

        // Redirect the user to the homepage
        redirect('/');
    }

    return (
      <form action={createSnippet}>
        <h3 className="font-bold m-3">Create a Snippet</h3>

        <div className="flex flex-col gap-4">
            <div className="flex gap-4">
                <label htmlFor="title" className="w-12">Title</label>
                <input type="text" className="border rounder p-2 w-full" id="title" name="title" />
            </div>
        </div>

        <div className="flex flex-col gap-4">
            <div className="flex gap-4">
                <label htmlFor="code" className="w-12">Code</label>
                <textarea className="border rounder p-2 w-full" id="code" name="code"></textarea>
            </div>
        </div>

        <button type="submit" className="rounded p-2 bg-blue-200">Create</button>
      </form>
    )  
  }
  