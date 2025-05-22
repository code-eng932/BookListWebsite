import BookList from "./BookList";

function App() {

    return (
        <>
            <BookList title="The Lightning Thief"
                author="Rick Riordan"
                summary="A boy discovers he's a demigod and goes on a quest to find Zeus's lightning bolt."
                genre="Fantasy" />
            <BookList title="Wonder"
                author="R.J. Palacio"
                summary="A story about a boy with a facial difference attending school for the first time."
                genre="Realistic Fiction" />
            <BookList title="Charlotte's Web"
                author="E.B. White"
                summary="A pig named Wilbur is saved by a spider named Charlotte."
                genre="Children's Literature" />

            <BookList title="Harry Potter"
                author="J.K. Rowling"
                summary="A young wizard discovers his powers and attends a magical school called Hogwarts."
                genre="Fantasy" />
            <BookList title="Diary of a Wimpy Kid"
                author="Jeff Kinney"
                summary="Greg Heffley navigates the challenges of middle school in a funny diary-style story."
                genre="Humor" />
            <BookList title="Matilda"
                author="Roald Dahl"
                summary="A gifted girl uses her powers to stand up to mean adults and change her life."
                genre="Fantasy / Adventure" />
        </>
    );
}

export default App
