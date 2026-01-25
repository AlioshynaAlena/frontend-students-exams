// import { createRoot } from "react-dom/client"

// export const App = () => {
//   return <h1>App</h1>
// }

// createRoot(document.getElementById("root")!).render(<App />)


// const CrazyButton = (props: any) => {
//   const style = {
//     color: props.fontColor,
//     backgroundColor: props.bgColor,
//   }

//   return <button style={style}>{props.title}</button>
// }

// export const App = () => {
//   return (
//     <div>
//       <CrazyButton title={"delete"} fontColor={"white"} bgColor={"red"} />
//       <CrazyButton title={"add"} fontColor={"white"} bgColor={"green"} />
//     </div>
//   )
// }

// createRoot(document.getElementById("root")!).render(<App />)

// // Что нужно написать вместо XXX YYY ZZZ? Ответ дайте через пробел



// export const YoutubeVideoBlock = () => {
//   return (
//     <div>
//       <VideoHeader />
//       <VideoContent />
//       <VideoStatistics />
//     </div>
//   )
// }

// const VideoHeader = () => {
//   return <div>😀 Заголовок видео</div>
// }

// const VideoContent = () => {
//   return <div>📼 Контент видео</div>
// }

// const VideoStatistics = () => {
//   return <div>📊 Статистика лайков</div>
// }

// createRoot(document.getElementById("root")!).render(<div> <YoutubeVideoBlock /> </div>)

// // Что нужно написать вместо ❗X, чтобы на экране увидеть:
// // 😀 Заголовок видео
// // 📼 Контент видео
// // 📊 Статистика лайков
// // ❗ Ответ дать минимально возможным объёмом кода




//❓НЕ РЕШИЛА из-за времени, потом решила
// type UserWallet = {
//   title: string
//   amount: number
// }

// type UserWalletProps = {
//   wallet: UserWallet
// }

// export const UserWallet = ({ wallet }: UserWalletProps) => {
//   return (
//     <p>
//       title: {wallet.title}, amount: {wallet.amount}
//     </p>
//   )
// }

// export const UserMoney = () => {
//   const wallets = [
//     { title: "bitcoin", amount: 1 },
//     { title: "$", amount: 100 },
//   ]

//   return (
//     <div>
//       <UserWallet wallet={wallets[0]} />
//       <UserWallet wallet={wallets[1]} />
//     </div>
//   )
// }

// createRoot(document.getElementById("root")!).render(<UserMoney />)

// // Что нужно написать вместо xxx и yyy, чтобы компонент UserMoney отобразил информацию о двух кошельках (bitcoin и $)?
// // Ответ дайте через пробел, например: props.x wallets





// type Props = {
//   city: string // 'Minsk'
//   country: string // 'Belarus'
//   coords?: string // '53.917501,27.604851'
// }

// const App = () => {
//   return <Component city="Minsk" country="Belarus" />
// }

// const Component = ({ city, country, coords }: Props) => {
//   return (
//     <div>
//       <p>{city}</p>
//       <p>{country}</p>
//       <p>{coords}</p>
//     </div>
//   )
// }

// createRoot(document.getElementById("root")!).render(<App />)

// // Что МИНИМАЛЬНО ДОСТАТОЧНО нужно дописать в строке 10 (cтрока с ошибкой), чтобы не было ошибки





// type PagePropsType = {
//   age: number
//   name: string
//   avatarUrl: string
// }

// const Page: React.FC<PagePropsType> = (props) => {
//     return <User a={props.age} n={props.name} />
// }

// type UserPropsType = {
//     a: number
//     n: string
// }

// export const User: React.FC<UserPropsType> = (props) => {
//     return <div>name: {props.n}, age: {props.a}</div>
// }

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <Page age={40} name="Brendan" avatarUrl={"test"} />
// );

// // Что нужно написать вместо xxx и yyy? 
// // Ответ дайте через пробел, например: blabla onClick(props)





// type News = {
//   title: string
//   author: string
// }

// type Article = {
//   title: string
//   date: string
//   text: string
// }

// type PageProps = {
//   news: News[]
//   mainArticle: Article
// }

// const Page = (props: PageProps) => {
//   return (
//     <div>
//       <article>
//         <h1>Название: {props.mainArticle.title}</h1>
//         <div>{props.mainArticle.date}</div>
//         <div>{props.mainArticle.text}</div>
//       </article>
//       <aside>
//         <h2>Articles:</h2>
//         <ul>
//           {props.news.map((n) => (
//             <li>
//               {n.title}, {n.author}
//             </li>
//           ))}
//         </ul>
//       </aside>
//     </div>
//   )
// }

// createRoot(document.getElementById("root")!).render(
//   <Page
//     news={[
//       { author: "Ivanov", title: "news title 1" },
//       { author: "Petrov", title: "news title 2" },
//     ]}
//     mainArticle={{ title: "article title 1", text: "text 1", date: "21.01.2001" }}
//   />,
// )

// // Что нужно написать вместо XXX и YYY, чтобы отобразить данные?
// // Ответ дайте через пробел, например: component props





// import { createRoot } from "react-dom/client"

// const VideoHeader = (props: { videoName: string }) => {
//   return <div>😀 {props.videoName}</div>
// }

// const VideoContent = (props: { videoContent: string }) => {
//   return (
//     <div>
//       📼 <a href={props.videoContent}>{props.videoContent}</a>
//     </div>
//   )
// }

// const VideoDescription = (props: { videoDescription: string }) => {
//   return <div>📑 {props.videoDescription}</div>
// }

// export const YoutubeVideo = (props: any) => {
//   return (
//     <div>
//       <VideoHeader videoName={props.video.title} />
//       <VideoContent videoContent={props.video.link} />
//       <VideoDescription videoDescription={props.video.description} />
//     </div>
//   )
// }

// export const App = () => {
//   const video = {
//     title: "Samurai way",
//     link: "https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8",
//     description: "Best free react-course",
//   }

//   return <YoutubeVideo video={video} />
// }

// createRoot(document.getElementById("root")!).render(<App />)

// // Что нужно написать вместо xxx yyy zzz, чтобы увидеть ожидаемый результат?
// // Ответ дайте через пробел, пример: a={12} b={video.id} c={'hello'}





// import { createRoot } from "react-dom/client"

// const Son = (props: any) => {
//   return <div>I am son. My name is {props.name}</div>
// }

// const Father = (props: any) => {
//   return (
//     <div>
//       I am father. My name is {props.name}
//       <Son name={props.sonName} />
//     </div>
//   )
// }

// const Granny = (props: any) => {
//   return (
//     <div>
//       I am granny. My name is {props.name}
//       <Father name={props.fatherName} sonName={props.sonName} />
//     </div>
//   )
// }

// export const App = () => {
//   return (
//     <div>
//       <Granny name={"Бабуля"} fatherName={"Батя"} sonName={"Сын"} />
//     </div>
//   )
// }

// createRoot(document.getElementById("root")!).render(<App />)

// // Что нужно написать вместо XXX YYY ZZZ? Ответ дайте через пробел




// import { createRoot } from "react-dom/client"

// type UserProps = {
//   name: string
//   description: string
// }

// const User = (props: UserProps) => {
//   return <div>
//     <p>Имя: {props.name}</p>
//     <p>Описание: {props.description}</p>
//   </div>
// }

// createRoot(document.getElementById("root")!).render(<User name={'John'} description={'lorem ipsum'} />)

// // Что нужно написать вместо '❗X', что бы в браузере отобразилось описание, которое передали в пропсах ?





// const user = { }
// const student = { }

// user !==  student 

// /*Каков результат выполнения этого выражения?*/



// ❓НЕ РЕШИЛА ПРАВИЛЬНО!
// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// function UsersList() {
//   const [users, setUsers] = useState<string[]>(["Bob", "Alex", "Ann"])
//   const getUser = (user: string) => <li>{user}</li>

//   return (
//     <div>
//       <h4>User list:</h4>
//       <ul>{users.map(getUser)}</ul>
//     </div>
//   )
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// // Что вернёт выражение: typeof getUser?



//❓НЕ РЕШИЛА ПРАВИЛЬНО!
// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// function UsersList() {
//   const results = useState<string[]>(["Bob", "Alex", "Ann"])

//   const users = results[0]
//   const setUsers = results[1]

//   return <p>Тут будет список пользователей</p>
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// // Чему равно results.length? 3




// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// function UsersList() {
//   const [users, setUsers] = useState<string[]>(["Bob", "Alex", "Ann"])
//   const getUser = (user: string) => <li>{user}</li>
//   const usersList = users.map(getUser)

//   return (
//     <div>
//       <h4>User list:</h4>
//       <ul>{usersList}</ul>
//     </div>
//   )
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// // Что вернёт выражение: Array.isArray(usersList)?



// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// function UsersList() {
//   const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//   const getUser = (user: string) => <li>{user}</li>
//   const usersList = users.map(getUser)

//   return (
//     <div>
//       <h4>User list:</h4>
//       <ul>{usersList}</ul>
//     </div>
//   )
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// // Какую переменную необходимо указать вместо XXX, чтобы код заработал?





// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// type User = {
//   id: number
//   name: string
//   age: number
// }

// const UsersList = () => {
//   const state = [
//     { id: 1, name: "Bob", age: 34 },
//     { id: 2, name: "Alex", age: 25 },
//     { id: 3, name: "Ann", age: 30 },
//     { id: 4, name: "John", age: 23 },
//   ]

//   const users = [
//     { id: 1, userName: "Bob", age: 34 },
//     { id: 2, userName: "Alex", age: 25 },
//     { id: 3, userName: "Ann", age: 30 },
//     { id: 4, userName: "John", age: 23 },
//   ]

//   const [usersList, setUsersList] = useState<User[]>(state)

//   return (
//     <>
//       <h2>User list:</h2>
//       <p>Тут будет список пользователей</p>
//     </>
//   )
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// // Что надо написать вместо XXX, чтобы код работал?
// // ❗ Если мы отмапим массив, то должны увидеть данные пользователей
// // ❗ Ответ дать минимально возможным объёмом кода






// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// function UsersList() {
//   const results = useState<string[]>(["Bob", "Alex", "Ann"])
//   const users = results[0]
//   const setUsers = results[1]

//   return <p>Тут будет список пользователей</p>
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// // Какой тип правильнее указать вместо "any" при типизации стэйта?




// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// function UsersList() {
//   const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])

//   return <p>Тут будет список пользователей!</p>
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// // Что вернёт выражение: typeof useState? function




// import { createRoot } from "react-dom/client"
// import { useState } from "react"

// function UsersList() {
//   const [users, setUsers] = useState<string[]>(["Bob", "Alex", "Ann"])

//   return <p>Тут будет список пользователей</p>
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// // Что вернёт выражение: Array.isArray(users)?




// import { createRoot } from "react-dom/client"
// import { useState } from "react"

// function UsersList() {
//   const [users, setUsers] = useState<string[]>(["Bob", "Alex", "Ann"])

//   return (
//     <div>
//       <h4>User list:</h4>
//       <ul>
//         {users.map((user) => (
//           <li>{user}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// // Что надо вставить вместо ХХХ, чтобы код заработал?




// import { createRoot } from "react-dom/client"
// import { useState } from "react"

// function UsersList() {
//   const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//   return <p>Тут будет список пользователей</p>
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// // Что вернёт выражение: typeof setUsers? function




// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// type User = {
//   id: number
//   name: string
//   age: number
// }

// type UserProps = User & {
//   deleteUser: (id: number) => void
// }

// const User = ({ deleteUser, age, id, name }: UserProps) => (
//   <li>
//     <button onClick={() => deleteUser(id)}>x</button>
//     User {name}: {age} y.o.
//   </li>
// )

// const UsersList = () => {
//   const data: User[] = [
//     { id: 1, name: "Bob", age: 25 },
//     { id: 2, name: "Alex", age: 28 },
//     { id: 3, name: "Ann", age: 23 },
//     { id: 4, name: "John", age: 30 },
//   ]

//   const [users, setUsers] = useState<User[]>(data)

//   const deleteUser = (userID: number) => {
//     setUsers(users.filter((u) => u.id !== userID))
//   }

//   return (
//     <main>
//       <h4>Users list:</h4>
//       <ul>
//         {users.map((u) => (
//           <User key={u.id} {...u} deleteUser={deleteUser} />
//         ))}
//       </ul>
//     </main>
//   )
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// // В типе UserProps у функции deleteUser в параметрах указан тип "any".
// // Какой тип было бы указать правильнее?






// import { MouseEvent, useState } from "react"
// import { createRoot } from "react-dom/client"

// const Button = () => {
//   const [tagName, setTagName] = useState<string>()

//   const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
//     setTagName(e.currentTarget.tagName)
//   }

//   return (
//     <>
//       <p>{tagName}</p>
//       <button onClick={onClickHandler}>
//         <span>Click</span>
//       </button>
//     </>
//   )
// }

// createRoot(document.getElementById("root")!).render(<Button />)

// // Что надо написать вместо ххх, что бы на странице появился текст BUTTON?



//❓НЕ РЕШИЛА ПРАВИЛЬНО!
// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// type User = {
//   id: number
//   name: string
//   age: number
// }

// const User = (props: User) => (
//   <li>
//     Student {props.name}: {props.age} y.o.
//   </li>
// )

// const UsersList = () => {
//   const data: User[] = [
//     { id: 1, name: "Bob", age: 34 },
//     { id: 2, name: "Alex", age: 29 },
//     { id: 3, name: "Ann", age: 25 },
//     { id: 4, name: "John", age: 36 },
//   ]

//   const [users] = useState<User[]>(data)

//   return (
//     <main>
//       <h4>User list:</h4>
//       <ul>
//         {users.map((u) => (
//           <User key={u.id} id={u.id} name={u.name} age={u.age}  />
//         ))}
//       </ul>
//     </main>
//   )
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// // Что надо написать вместо xxx, чтобы код работал?





// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// type User = {
//   id: number
//   name: string
//   age: number
// }

// type UserProps = User & {
//   deleteUser: (id: number) => void
// }

// const User = ({ deleteUser, age, name, id }: UserProps) => {
//   return (
//     <li>
//       User {name}: {age} y.o.
//       <button onClick={() => deleteUser(id)}>x</button>
//     </li>
//   )
// }

// const UsersList = () => {
//   const data: User[] = [
//     { id: 1, name: "Bob", age: 25 },
//     { id: 2, name: "Alex", age: 28 },
//     { id: 3, name: "Ann", age: 23 },
//     { id: 4, name: "John", age: 30 },
//   ]

//   const [users, setUsers] = useState<User[]>(data)

//   const deleteUser = (userID: number) => {
//     const filteredUsers = users.filter((u) => u.id !== userID)
//     setUsers(filteredUsers)
//   }

//   return (
//     <main>
//       <h4>User list:</h4>
//       <ul>
//         {users.map((u) => (
//           <User key={u.id} {...u} deleteUser={deleteUser} />
//         ))}
//       </ul>
//     </main>
//   )
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// // Что надо написать вместо xxx, чтобы код работал?




// import { MouseEvent } from "react"
// import { createRoot } from "react-dom/client"

// const Button = () => {
//   const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
//     console.log(typeof e === "object" )
//   }
//   return <button onClick={onClickHandler}>Click</button>
// }

// createRoot(document.getElementById("root")!).render(<Button />)

// // Что надо написать вместо ххх, чтобы в консоль вывело true?






// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// type User = {
//   id: number
//   name: string
//   age: number
// }

// const UsersList = () => {
//   const data: User[] = [
//     { id: 1, name: "Bob", age: 25 },
//     { id: 2, name: "Alex", age: 28 },
//     { id: 3, name: "Ann", age: 23 },
//     { id: 4, name: "John", age: 30 },
//   ]

//   const [users] = useState<User[]>(data)

//   // Необходимо отрендерить список пользователей старше 25 лет:
//   const getOlderThen25Users = (u: User) => u.age > 25
//   const olderThen25Users = users.filter(getOlderThen25Users)

//   return (
//     <main>
//       <h4>User list:</h4>
//       <ul>
//         {olderThen25Users.map((u) => {
//           return (
//             <li key={u.id}>
//               User {u.name}: {u.age} y.o.
//             </li>
//           )
//         })}
//       </ul>
//     </main>
//   )
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// // Что надо написать вместо xxx, чтобы код работал?







// export const user = {}
// export const cash = user
// export const student = {}

// if (cash === user) {
//   console.log("Yo!!!")
// }

// // Какую переменную надо указать вместо XXX, кроме user, что бы в консоль вывелась строка "Yo!!!?




// import { createRoot } from "react-dom/client"

// function Button() {

//   return <button  onClick={() => alert()}> debuggerClick</button>
// }


// createRoot(document.getElementById("root")!).render(<Button />)

// // Что надо написать вместо ххх,
// // чтобы на странице появился пустой alert при клике по кнопке?



// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// type User = {
//   id: number
//   name: string
//   age: number
// }

// const UsersList = () => {
//   const data: User[] = [
//     { id: 1, name: "Bob", age: 25 },
//     { id: 2, name: "Alex", age: 28 },
//     { id: 3, name: "Ann", age: 23 },
//     { id: 4, name: "John", age: 30 },
//   ]
//   const [users] = useState<User[]>(data)

//   const olderThen25Users = users.filter((u: User) => u.age > 25)

//   const isArray = Array.isArray(olderThen25Users) //true
//   debugger

//   return (
//     <main>
//       <h4>User list:</h4>
//       <ul>
//         {olderThen25Users.map((u) => {
//           return (
//             <li key={u.id}>
//               User {u.name}: {u.age} y.o.
//             </li>
//           )
//         })}
//       </ul>
//     </main>
//   )
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// // Что будет записано в переменную isArray в данном коде?






// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// type User = {
//   id: number
//   name: string
//   age: number
// }

// const UsersList = () => {
//   const data: User[] = [
//     { id: 1, name: "Bob", age: 34 },
//     { id: 2, name: "Alex", age: 29 },
//     { id: 3, name: "Ann", age: 25 },
//     { id: 4, name: "John", age: 36 },
//   ]
//   const [users] = useState<User[]>(data)

//   return (
//     <main>
//       <h4>User list:</h4>
//       <ul>
//         {users.map((u) => {
//           return (
//             <li key={u.id}>
//               Student {u.name}: {u.age} y.o.
//             </li>
//           )
//         })}
//       </ul>
//     </main>
//   )
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)
// // Что надо написать вместо xxx, чтобы код работал оптимально?





// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// type User = {
//   id: number
//   name: string
//   age: number
// }

// const UsersList = () => {
//   const data: User[] = [
//     { id: 1, name: "Bob", age: 24 },
//     { id: 2, name: "Alex", age: 28 },
//     { id: 3, name: "Ann", age: 23 },
//     { id: 4, name: "John", age: 30 },
//   ]

//   const [users] = useState<User[]>(data)

//   // Пользователи старше 25 лет:
//   const olderThen25Users = users.filter((u) => u.age > 25)

//   return (
//     <main>
//       <h4>User list:</h4>
//       <ul>
//         {olderThen25Users.map((u) => {
//           return (
//             <li key={u.id}>
//               User {u.name}: {u.age} y.o.
//             </li>
//           )
//         })}
//       </ul>
//     </main>
//   )
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// // Что надо написать вместо xxx, чтобы отрисовались пользователи старше 25 лет?



// import { useState, ChangeEvent } from "react"
// import { createRoot } from "react-dom/client"

// const User = () => {
//   const [userName, setUserName] = useState<string>("")

//   const [text, setText] = useState<string>("")

//   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//     setUserName(e.currentTarget.value)
//   }

//   return (
//     <div>
//       <input
//         value={userName}
//         onChange={onChangeHandler}
//         onBlur={() => {
//           setUserName("")
//           setText(userName)
//         }}
//       />
//       <p>{text}</p>
//     </div>
//   )
// }

// createRoot(document.getElementById("root")!).render(<User />)

// // Что надо написать вместо ❗X,
// // чтобы после вывода текста в параграф содержимое формы ввода очищалось?






// import { ChangeEvent, useState } from "react"
// import { createRoot } from "react-dom/client"

// const User = () => {
//   const [userName, setUserName] = useState<string>("")

//   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//     setUserName(e.currentTarget.value)
//   }

//   return (
//     <div>
//       <p>{userName}</p>
//       <input onChange={onChangeHandler} />
//     </div>
//   )
// }
// createRoot(document.getElementById("root")!).render(<User />)

// // Что надо написать вместо ххх, чтобы правильно типизировать параметр функции?






// import { MouseEvent } from "react"
// import { createRoot } from "react-dom/client"

// const AuthForm = () => {
//   const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault()
//     alert("🚀🚀🚀")
//   }
//   return (
//     <form>
//       <div>
//         <label style={{ padding: "10px 0" }}>
//           Name:
//           <input type={"email"} name={"email"} />
//         </label>
//       </div>
//       <div>
//         <label style={{ padding: "10px 0" }}>
//           Password:
//           <input type={"password"} name={"password"} />
//         </label>
//       </div>
//       <button onClick={onClickHandler} type={"submit"}>
//         Log in
//       </button>
//     </form>
//   )
// }

// createRoot(document.getElementById("root")!).render(<AuthForm />)

// // Что надо написать вместо ❗X, чтобы данные из формы
// // не отправлялись на сервер и страница не перезагружалась
// // при клике по кнопке?





// import { MouseEvent } from "react"
// import { createRoot } from "react-dom/client"

// const Post = () => {
//   const onClickHandler = (e: MouseEvent<HTMLAnchorElement>) => {
//     e.preventDefault()
//     alert("Летим 🚀")
//   }

//   return (
//     <a href={"https://www.youtube.com/"} onClick={onClickHandler}>
//       Ссылка, которая ведет на youtube
//     </a>
//   )
// }

// createRoot(document.getElementById("root")!).render(<Post />)

// // Что надо написать вместо ❗X, чтобы Вас не направило на страницу Youtube
// // при клике по ссылке?




// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// type User = {
//   id: number
//   name: string
//   age: number
// }

// type UserProps = User & {
//   deleteUser: (id: number) => void
// }

// const User = (props: UserProps) => (
//   <li>
//     <button onClick={() => props.deleteUser(props.id)}>x</button>
//     User {props.name}: {props.age} y.o.
//   </li>
// )

// const UsersList = () => {
//   const data: User[] = [
//     { id: 1, name: "Bob", age: 25 },
//     { id: 2, name: "Alex", age: 28 },
//     { id: 3, name: "Ann", age: 23 },
//     { id: 4, name: "John", age: 30 },
//   ]

//   const [users, setUsers] = useState<User[]>(data)

//   const deleteUser = (userID: number) => {
//     const filteredUsers = users.filter((u) => u.id !== userID)
//     setUsers(filteredUsers)
//   }

//   return (
//     <main>
//       <h4>User list:</h4>
//       <ul>
//         {users.map((u) => (
//           <User key={u.id} {...u} deleteUser={deleteUser} />
//         ))}
//       </ul>
//     </main>
//   )
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)
// // Что надо написать вместо xxx, чтобы код работал?





// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// const User = () => {
//   const [userName, setUserName] = useState<string>("")

//   return (
//     <div>
//       <p>{userName}</p>
//       <input
//         value={userName}
//         onChange={(e) => setUserName(e.currentTarget.value)}
//       />
//     </div>
//   )
// }

// createRoot(document.getElementById("root")!).render(<User />)

// // Что надо написать вместо ❗X, чтобы input был контролируемым?




// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// type User = {
//   id: number
//   name: string
//   age: number
// }

// type UserProps = User & {
//   deleteUser: (id: number) => void
// }

// const User = (props: UserProps) => {
//   const deleteUser = () => props.deleteUser(props.id)

//   return (
//     <li>
//       <button onClick={deleteUser}>Delete</button>
//       User {props.name}: {props.age} y.o.
//     </li>
//   )
// }

// const UsersList = () => {
//   const data: User[] = [
//     { id: 1, name: "Bob", age: 25 },
//     { id: 2, name: "Alex", age: 28 },
//     { id: 3, name: "Ann", age: 23 },
//     { id: 4, name: "John", age: 30 },
//   ]

//   const [users, setUsers] = useState<User[]>(data)

//   const deleteUser = (userID: number) => {
//     const updatedUsers = users.filter((u) => u.id !== userID)
//     setUsers(updatedUsers)
//   }

//   return (
//     <main>
//       <h4>User list:</h4>
//       <ul>
//         {users.map((u) => (
//           <User key={u.id} {...u} deleteUser={deleteUser} />
//         ))}
//       </ul>
//     </main>
//   )
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// // Что надо написать вместо xxx, чтобы код работал?




//❓НЕ РЕШИЛА ПРАВИЛЬНО!
// import { useState, ChangeEvent } from "react"
// import { createRoot } from "react-dom/client"

// const Notes = () => {
//   const [newNote, setNewNote] = useState<string>("")
//   const [notes, setNotes] = useState<string[]>([])

//   const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
//     setNewNote(e.currentTarget.value)
//   }

//   const addNoteHandler = () => {
//     setNotes([newNote, ...notes])
//     setNewNote("")
//   }


//   return (
//     <div>
//       <textarea value={newNote} onChange={onChangeHandler} />
//       <div>
//         <button onClick={addNoteHandler}>Add note</button>
//         <button onClick={() => setNotes([])}>Clear notes list</button>
//       </div>
//       <h4>Notes:</h4>
//       <div>
//         {notes.map((note) => (
//           <p>{note}</p>
//         ))}
//       </div>
//     </div>
//   )
// }

// createRoot(document.getElementById("root")!).render(<Notes />)
// // Что надо написать вместо ххх,
// // чтобы при клике на кнопку `Clear notes list` список заметок очищался?






// const camera = {
//   name: "Bob",
// }

// const affair = camera

// export const advertising = {}

// export const boss = {
//   name: "Bob",
// }

// if (boss === affair) {
//   console.log("Yo!!!")
// } else {
//   console.log("Hey!!!")
// }

// // Какие переменные можно использовать вместо XXX, что бы в консоль вывелась строка "Hey"!!!"?
// // Если их несколько, напишите через пробел.




// import { useState, ChangeEvent } from "react"
// import { createRoot } from "react-dom/client"

// const Notes = () => {
//   const [newNote, setNewNote] = useState<string>("")
//   const [notes, setNotes] = useState<string[]>([])

//   const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
//     setNewNote(e.currentTarget.value)
//   }

//   const addNoteHandler = () => {
//     setNotes([newNote, ...notes])
//     setNewNote("")
//   }

//   return (
//     <div>
//       <textarea value={newNote} onChange={onChangeHandler} />
//       <div>
//         <button onClick={addNoteHandler}>Add note</button>
//         <button onClick={()=>setNotes([])}>Clear notes list</button>
//       </div>
//       <h4>Notes:</h4>
//       <div>
//         {notes.map((note) => (
//           <p>{note}</p>
//         ))}
//       </div>
//     </div>
//   )
// }

// createRoot(document.getElementById("root")!).render(<Notes />)
// // Что надо написать вместо ххх,
// // чтобы при клике на кнопку `Clear notes list` список заметок очищался?





// const student = {
//   name: "Masha",
//   age: 59,
//   friends: ["Nikita", "Victor", "Lev"]
// }

// export const updatedStudent = {...student}

// updatedStudent.friends.push("Max")

// console.log(student.friends[3])

// // Какое значение будет выведено в консоль? Max




// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// const ColorButton = () => {
//   const [isColored, setIsColored] = useState<boolean>(false)

//   return (
//     <button style={{ backgroundColor: `${isColored === true ? "red" : ""}` }} onClick={() => setIsColored(true)}>
//       Меняю цвет по клику
//     </button>
//   )
// }

// createRoot(document.getElementById("root")!).render(<ColorButton />)

// // Что надо написать вместо XXX, чтобы при клике кнопка становилась красной?





// const student = {
//   name: "Max",
// }

// const newStudent = student

// const myFriend = {
//   ...newStudent,
// }

// const newUser = {
//   name: "Rita",
// }

// export const myFriendName = student.name !== myFriend.name ? newUser.name : student.name
// console.log(myFriendName);


// // Какое значение получит переменная "myFriendName"? Max





// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// type User = {
//   id: number
//   name: string
//   personalData: PersonalData
// }

// type PersonalData = {
//   gender: string
//   age: number
//   technologies: Technologies[]
// }

// type Technologies = "HTML" | "CSS" | "React" | "JS/TS" | "Redux"

// const UsersList = () => {
//   const [users] = useState<User[]>([
//     {
//       id: 1,
//       name: "Bob",
//       personalData: {
//         gender: "male",
//         age: 23,
//         technologies: ["HTML", "CSS", "React", "JS/TS", "Redux"],
//       },
//     },
//     {
//       id: 2,
//       name: "Alex",
//       personalData: {
//         gender: "male",
//         age: 21,
//         technologies: ["HTML", "CSS", "React"],
//       },
//     },
//     {
//       id: 3,
//       name: "Ann",
//       personalData: {
//         gender: "female",
//         age: 26,
//         technologies: ["HTML", "CSS", "JS/TS"],
//       },
//     },
//     {
//       id: 4,
//       name: "Helen",
//       personalData: {
//         gender: "female",
//         age: 31,
//         technologies: ["HTML", "CSS"],
//       },
//     },
//     {
//       id: 5,
//       name: "Donald",
//       personalData: {
//         gender: "male",
//         age: 28,
//         technologies: ["React", "JS/TS", "Redux"],
//       },
//     },
//   ])

//   return (
//     <ul>
//       {users.map((u) => {
//         return u.personalData.technologies.length >= 5 ? (
//           <li key={u.id}>{`User ${u.name}. ${u.personalData.age}. Ready to work.`}</li>
//         ) : (
//           <li key={u.id}>{`User ${u.name}. ${u.personalData.age}. `}</li>
//         )
//       })}
//     </ul>
//   )
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// // Те пользователи, у которых в стэке пять и более технологий, должны в списке
// // быть отмечены, как готовые к работе.
// // Что надо вставить вместо XXX, чтобы код выполнял данное условие?




// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// const UsersList = () => {
//   const [users, setUsers] = useState<string[]>(["Bob", "Alex", "Ann"])

//   const getUser = (user: string, i: number) => <li key={i}>{user}</li>

//   const usersList = users.length === 0 ? <p>List is empty</p> : <ul>{users.map(getUser)}</ul>

//   return (
//     <main>
//       <button onClick={() => setUsers([])}>Clear list</button>
//       <h4>User list:</h4>
//       {usersList}
//     </main>
//   )
// }

// createRoot(document.getElementById("root")!).render(<UsersList />)

// // Что надо вставить вместо XXX, чтобы код корректно работал со списком пользователей?




// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// const PasswordChecker = () => {
//   const [password, setPassword] = useState<string>("")

//   return (
//     <main>
//       <p>Your password must have more than 8 charters!</p>
//       <input
//         placeholder={"Enter your password"}
//         value={password}
//         onChange={(e) => setPassword(e.currentTarget.value)}
//         type={"password"}
//       />
//       {password.length < 9 && <p style={{ color: "red" }}>The password is too short!</p>}
//     </main>
//   )
// }

// createRoot(document.getElementById("root")!).render(<PasswordChecker />)

// // Что надо вставить вместо XXX, чтобы код работал нормально?




// import { useState } from "react"
// import { createRoot } from "react-dom/client"

// export const colors = ["red", "yellow", "green", "blue", "violet", "chartreuse"]

// const styles = {
//   width: "100px",
//   height: "100px",
//   borderRadius: "50%",
//   backgroundColor: "black",
// }

// const Colorize = () => {
//   const [color, setColor] = useState<string>("black")

//   const getColor = (colors: string[]) => {
//     const nextColor = colors[Math.floor(Math.random() * colors.length)]
//     return nextColor
//   }

//   return (
//     <main>
//       <div style={{ ...styles, backgroundColor: color }} />
//       <div>
//         <button onClick={() => setColor(getColor(colors))}>Get random color</button>
//       </div>
//     </main>
//   )
// }

// createRoot(document.getElementById("root")!).render(<Colorize />)

// // Что надо вставить вместо XXX, чтобы круг менял цвет по клику?






//‼️ НЕ ПРАВИЛЬНО!
// const customer = {
//   name: "Daniil",
//   age: 25
// }

// export const copyCustomer = {...customer}

// customer.name = "Artur"

// console.log(copyCustomer.name);


// // Чему равно copyCustomer.name после выполнения этого кода?




// const user = {
//     name: "Mia",
//     age: 8
// }

// export const copyUser = user
 
// user.age = 8

// console.log(copyUser.age);


// // Чему равно значение copyUser.age после выполнения этого кода?





// import { ChangeEvent, useState } from "react"
// import { createRoot } from "react-dom/client"

// const MIN_COMMENT_SIZE = 5

// const LongCommentChecker = () => {
//   const [comment, setComment] = useState<string>("")

//   const isCommentReady = comment.length > MIN_COMMENT_SIZE

//   const setCommentHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
//     const newComment = e.currentTarget.value

//     setComment(newComment)
//   }

//   const clearCommentsHandler = () => {
//     if (isCommentReady) {
//       setComment("")
//     }
//   }

//   return (
//     <main>
//       <textarea
//         placeholder={"Your comment must have more than 5 charters"}
//         value={comment}
//         onChange={setCommentHandler}
//       />
//       <div>
//         <button disabled={!isCommentReady} onClick={clearCommentsHandler}>
//           Send comment
//         </button>
//       </div>
//     </main>
//   )
// }

// createRoot(document.getElementById("root")!).render(<LongCommentChecker />)

// // Что нужно написать вместо XXX, чтобы кнопка отправки комментария отрабатывала верно:
// // первоначально кнопка должна быть в состоянии disable, а после успешного выполнения условия (комментарий должен быть больше 5 символов) должна раздизаблиться.
// // ❗ Ответ необходимо дать на основании данных (переменных), которые уже есть в коде





// const clients = ["Leo", "Maxim", "Ekaterina"]
// const clothes = [...clients]
// const beginning = clothes

// export const result = beginning !==  null ? "Yo!!!" : "Hey!!!"
// console.log(result);


// // Имя какой переменной надо указать вместо XXX, что бы переменная result получила значение "Yo!!!"?
// // Если такой переменной нет, в качестве ответа укажите null.





// const student = {
//     name: "Daniil",
//     age: 29,
//     friends: ["Michail", "Masha", "Egor"]
// }

// const updatedStudent = {
//    ...student, 
//    friends: student.friends
// }

// console.log(student.friends === updatedStudent.friends)

// // Какое значение будет выведено в консоль?





// const customer = {
//   name: "Rita",
//   age: 78,
//   friends: ["Artem", "Nikita", "Andrey"]
// }

// const newFriend = "Leonid"

// const friends = [...customer.friends, newFriend]

// export const updatedCustomer = {...customer, friends: friends}

// // Выполнено преобразование объекта: добавлен новый друг в список.
// // Что надо указать вместо XXX, что бы выполнить это действие иммутабельно?





// type Samurai = {
//   id: string
//   name: string
//   status: "online" | "offline"
// }

// type CourseName = "HTML" | "JS" | "React" | "Redux" | "HomeWorks"

// type Course = {
//   name: CourseName
//   mentor: string
//   isDone: boolean
// }

// type Technologies = {
//   [userID: string]: Course[]
// }

// const samuraiID_1 = "64jf-87kg"
// const samuraiID_2 = "90lg-34ks"
// const samuraiID_3 = "12jm-05fd"

// export const samurai: Samurai[] = [
//   { id: samuraiID_1, name: "Bob", status: "online" },
//   { id: samuraiID_2, name: "Alex", status: "offline" },
//   { id: samuraiID_3, name: "Ann", status: "offline" },
// ]

// export const technologies: Technologies = {
//   [samuraiID_1]: [
//     { name: "HTML", mentor: "Svetlana", isDone: true },
//     { name: "JS", mentor: "Viktor", isDone: true },
//     { name: "React", mentor: "Dmitrij", isDone: false },
//     { name: "Redux", mentor: "Valera", isDone: false },
//     { name: "HomeWorks", mentor: "Ignat", isDone: true },
//   ],
//   [samuraiID_2]: [
//     { name: "HTML", mentor: "Svetlana", isDone: true },
//     { name: "JS", mentor: "Viktor", isDone: true },
//     { name: "React", mentor: "Dmitrij", isDone: true },
//     { name: "Redux", mentor: "Valera", isDone: false },
//     { name: "HomeWorks", mentor: "Ignat", isDone: true },
//   ],
//   [samuraiID_3]: [
//     { name: "HTML", mentor: "Svetlana", isDone: true },
//     { name: "JS", mentor: "Viktor", isDone: true },
//     { name: "React", mentor: "Dmitrij", isDone: false },
//     { name: "Redux", mentor: "Valera", isDone: false },
//     { name: "HomeWorks", mentor: "Ignat", isDone: false },
//   ],
// }

// export const updateCourseStatus = (samuraiID: string, name: CourseName, isDone: boolean) => {
//   return { ...technologies, [samuraiID]: technologies[samuraiID].map((c) => (c.name === name ? { ...c, isDone } : c)) }
// }

// // Дан список самураев из инкубатора и структура, хранящая данные о курсах,
// // которые самурай уже прошёл, а так же о тех курсах, которые ему ещё предстоит пройти.
// // Так же дана функция updateCourseStatus,
// // которая позволяет отметить курс как пройденный самураем или снять такую отметку
// // Что надо написать вместо XXX, чтобы функция работала корректно?




// //⛔️НЕПРАВИЛЬНО
// type Student = {
//   id: number
//   name: string
// }

// type Friends = {
//   [key: string]: string[]
// }

// export const students: Student[] = [
//   { id: 1, name: "Bob" },
//   { id: 2, name: "Alex" },
//   { id: 3, name: "Ann" },
//   { id: 4, name: "Charley" },
// ]

// export const friends: Friends = {
//   1: ["Oliver", "Jack", "Oscar"],
//   2: ["Jack", "Lewis", "Thomas"],
//   3: ["William", "Michael", "Lewis"],
//   4: ["Oscar", "James", "William"],
// }

// //Дан список студентов и структура,
// //которая содержит список друзей каждого из студентов.
// //Id студента является ключом к массиву его друзей.
// //Какое значение лежит тут: friends[students[1].id][2]?
// console.log(friends[students[1].id][2]); //["Jack", "Lewis", "Thomas"]






// type Student = {
//   id: number
//   name: string
//   age: number
// }

// type Friends = {
//   [key: string]: string[]
// }

// export const students: Student[] = [
//   { id: 1, name: "Bob", age: 34 },
//   { id: 2, name: "Alex", age: 23 },
//   { id: 3, name: "Ann", age: 25 },
//   { id: 4, name: "Charley", age: 20 },
// ]

// export const friends: Friends = {
//   1: ["Jack", "Oliver", "Oscar"],
//   2: ["Jack", "Lewis", "Thomas"],
//   3: ["William", "Lewis", "Michael"],
//   4: ["Oscar", "Thomas", "William"],
// }

// //Дан массив студентов и структура,
// //которая содержит список друзей каждого из студентов.
// //Id студента является ключом к массиву его друзей.
// //Имеют ли студенты students[1] и students[3] общих друзей?
// //Если да, напишите в ответе имя общего друга в кавычках, если нет - напишите в ответе false.





// type Student = {
//   id: number
//   name: string
// }

// type Friends = {
//   [key: string]: string[]
// }

// export const students: Student[] = [
//   { id: 1, name: "Bob" },
//   { id: 2, name: "Alex" },
//   { id: 3, name: "Ann" },
//   { id: 4, name: "Charley" },
// ]

// export const friends: Friends = {
//   1: ["Oliver", "Jack", "Oscar"],
//   2: ["Jack", "Lewis", "Thomas"],
//   3: ["William", "Michael", "Lewis"],
//   4: ["Oscar", "James", "William"],
// }

// console.log(friends[3][1]);


// //Дан список студентов и структура,
// //которая содержит список друзей каждого из студентов.
// //Id студента является ключом к массиву его друзей.
// //Какое значение лежит тут: friends[3][1]?





// type Student = {
//   id: number
//   name: string
// }

// type Students = Student[]

// type Friends = {
//   [key: string]: string[]
// }

// export const students: Students = [
//   { id: 1, name: "Bob" },
//   { id: 2, name: "Alex" },
//   { id: 3, name: "Ann" },
//   { id: 4, name: "Charley" },
// ]

// export const friends: Friends = {
//   1: ["Oliver", "Jack", "Oscar"],
//   2: ["Jack", "Lewis", "Thomas"],
//   3: ["William", "Michael", "Lewis"],
//   4: ["Oscar", "James", "William"],
// }

// //Дан список студентов и структура,
// //которая содержит список друзей каждого из студентов.
// //Id студента является ключом к массиву его друзей.
// //Что вернёт выражение: Array.isArray(friends)?




// type Student = {
//   id: number
//   name: string
// }

// type Friends = {
//   [key: string]: string[]
// }

// export const students: Student[] = [
//   { id: 1, name: "Bob" },
//   { id: 2, name: "Alex" },
//   { id: 3, name: "Ann" },
//   { id: 4, name: "Charley" },
// ]

// export const friends: Friends = {
//   1: ["Oliver", "Jack", "Oscar"],
//   2: ["Jack", "Lewis", "Thomas"],
//   3: ["William", "Michael", "Lewis"],
//   4: ["Oscar", "James", "William"],
// }

// //Дан список студентов и структура,
// //которая содержит список друзей каждого из студентов.
// //Id студента является ключом к массиву его друзей.
// //Какое значение лежит тут: friends[students[0].id][3]?




// type Student = {
//   id: number
//   name: string
// }

// type Students = Student[]

// type Friends = {
//   [key: string]: string[]
// }

// export const students: Students = [
//   { id: 1, name: "Bob" },
//   { id: 2, name: "Alex" },
//   { id: 3, name: "Ann" },
//   { id: 4, name: "Charley" },
// ]

// export const friends: Friends = {
//   1: ["Oliver", "Jack", "Oscar"],
//   2: ["Jack", "Lewis", "Thomas"],
//   3: ["William", "Michael", "Lewis"],
//   4: ["Oscar", "James", "William"],
// }

// //Дан список студентов и структура,
// //которая содержит список друзей каждого из студентов
// //Id студента является ключом к массиву его друзей.
// //Что вернёт выражение Array.isArray(students)?



// const getArray = (a, b, c) => {
//   return [c, b, a]
// }
//
// export const [boy, body, activity] = getArray(42, 96, 72)
//
// console.log(boy)
//
// // Какое число будет выведено в консоль?



// //⛔️НЕПРАВИЛЬНО
// const person = {
//   name: "Marina",
//   age: 16,
//   scores: [69.04, 31.24, 13.50],
// }
//
// export const { name, age, scores } = person
//
// console.log(person.scores === scores && age)
//
// // Какое значение мы увидим в консоли?





// type User = {
//   id: number
//   name: string
//   status: "online" | "offline"
// }
//
// type Address = {
//   country: string
//   city: string
//   email: string
// }
//
// type Adresses = {
//   [userID: string]: Address
// }
//
// const users: User[] = [
//   { id: 1, name: "Bob", status: "online" },
//   { id: 2, name: "Alex", status: "offline" },
//   { id: 3, name: "Ann", status: "offline" },
// ]
//
// export const addresses: Adresses = {
//   1: { country: "Russia", city: "Moscow", email: "hey@email.com" },
//   2: { country: "Ukraine", city: "Kiev", email: "yo@send.ua" },
//   3: { country: "Belarus", city: "Minsk", email: "wow@gogo.ru" },
// }
//
// export const changeUserStatus = (userID: number, status: string) => {
//   return users.map((u) => (u.id === userID ? { ...u, status } : u))
// }
//
// // Дан список пользователей и структура, хранящая адреса пользователей.
// // Так же дана функция changeUserStatus, которая меняет статус пользователя.
// // Что надо написать вместо ххх, чтобы функция работала корректно?





// const userName = (user = "") => {
//   let userName: any = "Leonid"
//   userName += user
//   return user
// }
//
// export const student = userName() || "Masha"
//
// console.log(student)
//
// // Какое значение получит переменная student?




// const customer = {
//   name: "Margo",
//   age: 68,
//   scores: [76.05, 92.40, 33.33],
// }
//
// export const [first, second, third = 9.75] = customer.scores
//
// switch (third) {
//   case 9.75:
//     console.log("Australia")
//     break
//   case 92.40:
//     console.log("Argentina")
//     break
//   default:
//     console.log("Bulgaria")
// }
//
// // Какую строку мы увидим в консоли?





// type User = {
//   id: number
//   name: string
//   status: "online" | "offline"
// }
//
// type Address = {
//   country: string
//   city: string
//   email: string
// }
//
// type Adresses = {
//   [userID: string]: Address
// }
//
// export const users: User[] = [
//   { id: 1, name: "Bob", status: "online" },
//   { id: 2, name: "Alex", status: "offline" },
//   { id: 3, name: "Ann", status: "offline" },
// ]
//
// const addresses: Adresses = {
//   1: { country: "Russia", city: "Moscow", email: "hey@email.com" },
//   2: { country: "Ukraine", city: "Kiev", email: "yo@send.ua" },
//   3: { country: "Belarus", city: "Minsk", email: "wow@gogo.ru" },
// }
//
// export const updateUserAddress = (userID: number, key: string, newValue: string) => {
//   return { ...addresses, [userID]: { ...addresses[userID], [key]: newValue } }
// }
// // Дан список пользователей и структура, хранящая адреса пользователей.
// // Так же дана функция updateUserAddress,
// // которая обновляет указанное в параметрах поле в адресе пользователя.
// // Пример использования функции: updateUserAddress(2, "city", "Dnepropetrovsk")
// // Что надо написать вместо ххх, чтобы функция работала корректно?





// type Samurai = {
//   id: string
//   name: string
//   status: "online" | "offline"
// }
//
// type CourseName = "HTML" | "JS" | "React" | "Redux" | "HomeWorks"
//
// type Course = {
//   name: CourseName
//   mentor: string
//   isDone: boolean
// }
//
// type Technologies = {
//   [userID: string]: Course[]
// }
//
// const samuraiID_1 = "64jf-87kg"
// const samuraiID_2 = "90lg-34ks"
// const samuraiID_3 = "12jm-05fd"
//
// export const samurai: Samurai[] = [
//   { id: samuraiID_1, name: "Bob", status: "online" },
//   { id: samuraiID_2, name: "Alex", status: "offline" },
//   { id: samuraiID_3, name: "Ann", status: "offline" },
// ]
//
// export const technologies: Technologies = {
//   [samuraiID_1]: [
//     { name: "HTML", mentor: "Svetlana", isDone: true },
//     { name: "JS", mentor: "Viktor", isDone: true },
//     { name: "React", mentor: "Dmitrij", isDone: false },
//     { name: "Redux", mentor: "Valera", isDone: false },
//     { name: "HomeWorks", mentor: "Ignat", isDone: true },
//   ],
//   [samuraiID_2]: [
//     { name: "HTML", mentor: "Svetlana", isDone: true },
//     { name: "JS", mentor: "Viktor", isDone: true },
//     { name: "React", mentor: "Dmitrij", isDone: true },
//     { name: "Redux", mentor: "Valera", isDone: false },
//     { name: "HomeWorks", mentor: "Ignat", isDone: true },
//   ],
//   [samuraiID_3]: [
//     { name: "HTML", mentor: "Svetlana", isDone: true },
//     { name: "JS", mentor: "Viktor", isDone: true },
//     { name: "React", mentor: "Dmitrij", isDone: false },
//     { name: "Redux", mentor: "Valera", isDone: false },
//     { name: "HomeWorks", mentor: "Ignat", isDone: false },
//   ],
// }
//
// export const updateCourseStatus = (samuraiID: string, name: CourseName, isDone: boolean) => {
//   return { ...technologies, [samuraiID]: technologies[samuraiID].map((c) => (c.name === name ? { ...c, isDone } : c)) }
// }
// // Дан список самураев из инкубатора и структура, хранящая данные о курсах,
// // которые самурай уже прошёл, а так же о тех курсах, которые ему ещё предстоит пройти.
// // Так же дана функция updateCourseStatus,
// // которая позволяет отметить курс как пройденный самураем или снять такую отметку
// // Что надо написать вместо ххх, чтобы функция работала корректно?



// // //⛔️НЕПРАВИЛЬНО
// const names = ["Leonid", "Ekaterina", "Maria"]
//
// const nameNext = names
//
// nameNext.length = 0
//
// export const result = names[0] ? 74 : 68
// console.log(result)
//
// // Какое значение получит переменная result?





// const client = {
//   name: "Liza",
//   age: 49,
//   friends: ["Leo", "Rita", "William", "Svetlana"],
// }
//
// const [basket, assignment, clothes] = client.friends
//
// export const result = assignment
// console.log(assignment)
// // Какое значение получит переменная result?





// type Student = {
//   id: number
//   name: string
// }
//
// type Friends = {
//   [key: string]: string[]
// }
//
// export const students: Student[] = [
//   { id: 1, name: "Bob" },
//   { id: 2, name: "Alex" },
//   { id: 3, name: "Ann" },
//   { id: 4, name: "Charley" },
// ]
//
// export const friends: Friends = {
//   1: ["Oliver", "Jack", "Oscar"],
//   2: ["Jack", "Lewis", "Thomas"],
//   3: ["William", "Michael", "Lewis"],
//   4: ["Oscar", "James", "William"],
// }
//
// const getMutualFriends = (st_1: Student, st_2: Student) => {
//   const result: string[] = []
//   friends[st_1.id].forEach((f) => (friends[st_2.id].includes(f) ? result.push(f) : null))
//   return result
// }
//
// // Дан массив студентов и структура,
// // которая содержит список друзей каждого из студентов.
// // Так же дана функция getMutualFriends, проверяющая наличие общих друзей
// // у двух выбранных студентов.
// // Функция принимает параметром два объекта типа Student
// // и возвращает массив с именами общих друзей,
// // если они есть и пустой массив, если таковых нету.
// // Что надо написать вместо ххх, чтобы функция работала?


// //⛔️НЕПРАВИЛЬНО
// const animal = {
//   name: "Daniil",
//   scores: 12, //13
// }
//
// const country = {
//   ...animal,
//   scores: animal.scores++,
// }
//
// export const scores = country.scores
// console.log(scores)
// // Какое значение получит переменная scores?




// const { customer } = { customer: 56 }
//
// const multiply = customer * 30.06 // 1683,36
//
// export const randomValue = multiply && "Valera" && "Maxim"
// console.log(randomValue)
// // Какое значение получит переменная randomValue ?



// type User = {
//   id: number
//   userName: string
//   email: string
//   password: string
// }
//
// type ChangeUserPasswordAction = {
//   type: "CHANGE-USER-PASSWORD"
//   payload: {
//     id: number
//     newPassword: string
//   }
// }
//
// export const userReducer = (state: User[], action: ChangeUserPasswordAction): User[] => {
//   switch (action.type) {
//     case "CHANGE-USER-PASSWORD":
//       return state.map((u) => (u.id === action.payload.id ? { ...u, password: action.payload.newPassword } : u))
//     default:
//       return state
//   }
// }
//
// // Какой код должен быть написан вместо XXX и YYY в типе
// // ChangeUserPasswordAction, что бы редьюсер работал?
// // В ответе напишите через пробел: XXX YYY




// const name = "Igor"
//
// const student = {
//   [name]: name,
// }
//
//
// export const number = student["name"] ? 49.48 : 87.75
// console.log(number)
// // Какое значение получит переменная number?



// type Action = {
//   type: "SUM" | "SUB" | "MULT" | "DIV" | "EXP"
//   payload: number
// }
//
// export const calculator = (state: number, action: Action): number => {
//   switch (action.type) {
//     case "SUM":
//       return state + action.payload
//     case "SUB":
//       return state - action.payload
//     case "DIV":
//       return state / action.payload
//     case "EXP":
//       return state ** action.payload
//     default:
//       return state
//   }
// }
//
// // Что вернёт такой вызов функции: calculator(10, {type: "MULT", payload: 2})?
// console.log(calculator(10, {type: "MULT", payload: 2}))



// //⛔️НЕПРАВИЛЬНО
// let result = 0 //4
//
// for (let i = 0; i < 5; i++) {
//   if (i % 2) {
//     result += i
//   }
// }
//
//
// export const studentName = result - 4 ? "Valera" : "Lev"
// console.log(studentName)
// // Какое значение получит переменная studentName?




// type Action = {
//   type: "SUM" | "SUB" | "MULT" | "DIV"
//   payload: number
// }
//
// export const calculator = (state: number, action: Action): number => {
//   switch (action.type) {
//     case "SUM":
//       return state + action.payload
//     case "SUB":
//       return state - action.payload
//     case "DIV":
//       return state / action.payload
//     default:
//       return state
//   }
// }
//
// //Обработка какого action.type не предусмотрена в функции calculator?



// type Action = {
//   type: "SUM" | "SUB" | "MULT" | "DIV"
//   payload: number
// }
//
// export const calculator = (state: number, action: Action): number => {
//   switch (action.type) {
//     case "SUM":
//       return state + action.payload
//     case "SUB":
//       return state - action.payload
//     case "DIV":
//       return state / action.payload
//     case "MULT":
//       return state * action.payload
//     default:
//       return state
//   }
// }
//
// const result = calculator(10, {type: "SUB", payload: 5 })
// console.log(result)
//
// //Что надо написать вместо XXX, что бы переменная result содержала значение 5?




// type Action = {
//   type: "SUM" | "SUB" | "MULT" | "DIV"
//   payload: number
// }
//
// export const calculator = (state: number, action: Action) => {
//   switch (action.type) {
//     case "SUM":
//       return state + action.payload
//     case "SUB":
//       return state - action.payload
//     case "DIV":
//       return state / action.payload
//     default:
//       return state
//   }
// }
//
// //Что надо написать вместо ХХХ, чтобы функция calculator работала?




// type Action = {
//   type: "SUM" | "SUB" | "MULT" | "DIV" | "EXP"
//   payload: number
// }
//
// export const calculator = (state: number, action: Action): number => {
//   switch (action.type) {
//     case "SUM":
//       return state + action.payload
//     case "SUB":
//       return state - action.payload
//     case "DIV":
//       return state / action.payload
//     case "MULT":
//       return state * action.payload
//     case "EXP":
//       return state ** action.payload
//     default:
//       return state
//   }
// }
// const result = calculator(10, { type: "EXP", payload: 0 })
// if (!(result - 1)) {
//   console.log("IT-INCUBATOR")
// }
//
// // Что надо написать вместо XXX чтобы в консоли появилась строка "IT-INCUBATOR"?



// export const reducer = (state: any, action: any) => {
//   switch (action.type) {
//     case "TRACK-DELETED":
//       return state.filter((track: any) => track.id !== action.trackId)
//     default:
//       return state
//   }
// }
//
// const deleteTrackAC = (trackId: number) => ({ type: "TRACK-DELETED", trackId })
//
// const state = [
//   { id: 12, likesCount: 10 },
//   { id: 14, likesCount: 2 },
//   { id: 100, likesCount: 0 },
// ]
// const newState = reducer(state, deleteTrackAC(14))
//
// console.log(newState.length === 2)
//
// // Что нужно написать вместо XXX, чтобы корректно удалить трек и в консоли увидеть true?




// ‼️НЕПРАВИЛЬНО!
// type Status = "Stopped" | "Playing" | "Paused"
//
// type PlayerState = {
//   volume: number // in percents
//   trackUrl: string // 'https://blabla.com/track01.mp3',
//   currentPlayPosition: number // milliseconds,
//   status: Status
// }
//
// const playerReducer = (state: PlayerState, action: any) => {
//   switch (action.type) {
//     case "TRACK-VOLUME-CHANGED":
//       return {
//         ...state,
//         volume: 20
//       }
//     default:
//       return state
//   }
// }
//
// export const muteTrackAC = () => ({ type: "TRACK-MUTED" })
// export const changeVolumeAC = (volumeLevel: number) => ({ type: "TRACK-VOLUME-CHANGED", volumeLevel })
// export const changeTrackAC = (url: string) => ({ type: "TRACK-URL-CHANGED", url })
// export const changeTrackPlayStatusAC = (status: Status) => ({ type: "TRACK-STATUS-CHANGED", status })
//
// const state: PlayerState = {
//   status: "Stopped",
//   currentPlayPosition: 1213,
//   trackUrl: "https://blabla.com/track01.mp3",
//   volume: 100,
// }
// const newState = playerReducer(state, changeVolumeAC(20))
// console.log(newState.volume === 20)
//
// // Напишите вместо XXX правильную строку кода, чтобы изменить громкость трека и увидеть в консоли true.





// // ‼️НЕПРАВИЛЬНО!
// const array = [1, 2, 3, 4, 5]
// // const result = array.push(6) - array.pop()
// // const result = array.push(6)
// const result = array.pop()
// console.log(result) //6 -
//
//
// export const bestStudent = result ? "Anastasiya" : "Natali"
//
// // Какое значение получит переменная bestStudent?



// type Status = "Stopped" | "Playing" | "Paused"
//
// type PlayerState = {
//   volume: number // in percents
//   trackUrl: string // 'https://blabla.com/track01.mp3',
//   currentPlayPosition: number // milliseconds,
//   status: Status
// }
//
// const playerReducer = (state: PlayerState, action: any) => {
//   switch (action.type) {
//     case "TRACK-STATUS-CHANGED":
//       return {
//         ...state,
//         status: action.status,
//       }
//     default:
//       return state
//   }
// }
//
// export const muteTrackAC = () => ({ type: "TRACK-MUTED" })
// export const changeTrackAC = (url: string) => ({ type: "TRACK-URL-CHANGED", url })
// export const changeTrackPlayStatusAC = (status: Status) => ({ type: "TRACK-STATUS-CHANGED", status })
//
// const state: PlayerState = {
//   status: "Stopped",
//   currentPlayPosition: 1213,
//   trackUrl: "https://blabla.com/track01.mp3",
//   volume: 100,
// }
//
// const newState = playerReducer(state, changeTrackPlayStatusAC("Paused"))
// console.log(newState.status === "Paused")
//
// // Напишите вместо XXX правильный вызов правильного AC, чтобы в консоли было true



// //@ts-ignore
// const value = [0, [1, 0]][1][0]
// let quantity
//
// switch (value) {
//   case 0:
//     quantity = 73
//     break
//   case 1:
//     quantity = 59
//     break
//   default:
//     quantity = 90
//     break
// }
//
// // Какое значение получит переменная quantity?






// const reducer = (state: any, action: any) => {
//   switch (action.type) {
//     case "TRACK-LIKED":
//       return {
//         ...state,
//         [action.trackId]: {
//           ...state[action.trackId],
//           likesCount: state[action.trackId].likesCount + 1,
//         },
//       }
//     default:
//       return state
//   }
// }
//
// const likeTrackAC = (trackId: number) => ({ type: "TRACK-LIKED", trackId })
//
// const state = {
//   12: { id: 12, likesCount: 10 },
//   14: { id: 14, likesCount: 2 },
//   100: { id: 100, likesCount: 0 },
// }
// const newState = reducer(state, likeTrackAC(14))
//
// console.log(newState[14].likesCount === 3)
//
// // Что нужно написать вместо XXX, чтобы в консоли увидеть true?
// // ❗ Захардкодженные значения использовать запрещено





// type Status = "Stopped" | "Playing" | "Paused"
//
// type PlayerState = {
//   volume: number // in percents
//   trackUrl: string // 'https://blabla.com/track01.mp3',
//   currentPlayPosition: number // milliseconds,
//   status: Status
// }
//
// export const playerReducer = (state: PlayerState, action: any) => {
//   switch (action.type) {
//     case "TRACK-URL-CHANGED":
//       return {
//         ...state,
//         trackUrl: action.url,
//       }
//     default:
//       return state
//   }
// }
//
// export const muteTrackAC = () => ({ type: "TRACK-MUTED" })
// export const changeTrackAC = (url: string) => ({ type: "TRACK-URL-CHANGED", url })
// export const changeTrackPlayStatusAC = (status: Status) => ({ type: "TRACK-STATUS-CHANGED", status })
//
// // Какой тип должен быть вместо XXX?





// ❗
// import { Provider, useSelector } from "react-redux"
// import { createRoot } from "react-dom/client"
// import { combineReducers, configureStore } from "@reduxjs/toolkit"
//
// let initialState = {
//   items: [
//     { id: 1, name: "Dimych" },
//     { id: 2, name: "Ignat" },
//   ],
// }
// const usersReducer = (state = initialState, action: any) => {
//   return state
// }
//
// let authInitialState = { login: "Margo", settings: { theme: "dark" } }
// const authReducer = (state = authInitialState, action: any) => {
//   return state
// }
//
// const rootReducer = combineReducers({
//   users: usersReducer,
//   auth: authReducer,
// })
//
// const store = configureStore({
//   reducer: rootReducer,
// })
//
// type RootStateType = ReturnType<typeof rootReducer>
//
// export const selector = (state: RootStateType) => state.users.items
//
// const Users = () => {
//   const users = useSelector(selector)
//
//   return (
//     <ul>
//       {users.map((u) => (
//         <li key={u.id}>{u.name}</li>
//       ))}
//     </ul>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <Users />
//   </Provider>,
// )
//
// // Что нужно написать вместо XXX, чтобы отрендерить список юзеров?
// // ❗ Ответ дать минимально возможным объёмом кода







// let number = 92
//
// if (number > 0) {
//   let number = 35
//   number++
// }
//
// const getNumber = (number: any) => {
//   number *= 10
//   return number //920
// }
//
// export const bigValue = getNumber("number") || number
// console.log(bigValue)
// // Какое значение получит переменная bigValue?




// import { combineReducers, configureStore } from "@reduxjs/toolkit"
//
// let initialState = { items: [{ name: "Dimych" }, { name: "Ignat" }] }
// const usersReducer = (state = initialState, action: any) => {
//   return state
// }
//
// const store = configureStore({
//   reducer: combineReducers({
//     users: usersReducer,
//   }),
// })
//
// store.subscribe(() => {
//   const state = store.getState()
//   console.log(state)
// })
//
// store.dispatch({ type: "ANY" })
//
// // Что нужно написать вместо XXX, чтобы получить актуальный стейт?




// import { CSSProperties, useReducer, useState } from "react"
// import { createRoot } from "react-dom/client"
//
// const commonStyles: CSSProperties = {
//   border: "1px solid black",
//   margin: "100px auto",
//   width: "300px",
//   height: "150px",
//   textAlign: "center",
// }
//
// const btnStyles: CSSProperties = {
//   color: "white",
//   fontWeight: "bold",
//   backgroundColor: "darkgray",
//   borderRadius: "3px",
//   minWidth: "40px",
// }
//
// const changeCounter = (state: number, action: any): number => {
//   switch (action.type) {
//     case "INC_VALUE":
//       return state + 1
//     case "RESET":
//       return 0
//     case "DEC_VALUE":
//       return state - 1
//     default:
//       return state
//   }
// }
//
// const Counter = () => {
//   const [value, setValue] = useReducer(changeCounter, 0)
//   const [isCounter, setIsCounter] = useState(true)
//
//   return (
//     <div style={commonStyles}>
//       {isCounter && (
//         <div>
//           <div style={{ marginBottom: "20px" }}>
//             <h2>{value}</h2>
//             <button style={{ ...btnStyles, backgroundColor: "red" }} onClick={() => setIsCounter(false)}>
//               OFF
//             </button>
//           </div>
//           <button style={btnStyles} onClick={() => setValue({ type: "INC_VALUE" })}>
//             +
//           </button>
//           <button style={btnStyles} onClick={() => setValue({ type: "RESET" })}>
//             0
//           </button>
//           <button style={btnStyles} onClick={() => setValue({ type: "DEC_VALUE" })}>
//             -
//           </button>
//         </div>
//       )}
//       {!isCounter && (
//         <div style={{ textAlign: "center" }}>
//           <h2>Counter not working</h2>
//           <button style={{ ...btnStyles, backgroundColor: "green" }} onClick={() => setIsCounter(true)}>
//             ON
//           </button>
//         </div>
//       )}
//     </div>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(<Counter />)
//
// // Что надо написать вместо XXX и YYY, чтобы код работал? Напишите через пробел.





//‼️НЕ РЕШИЛА
// const myFunction = (a: number, b = 3) => a + b
//
// const result = myFunction(346, undefined) % 2
//
// export const winner = result ? "Yana" : "Victor"
// console.log(winner)
//
// // Какое значение получит переменная winner?



// import { combineReducers, configureStore } from "@reduxjs/toolkit"
//
// let initialState = { items: [{ name: "Dimych" }, { name: "Ignat" }] }
// const usersReducer = (state = initialState, action: any) => {
//   return state
// }
//
// const store = configureStore({
//   reducer: combineReducers({
//     users: usersReducer,
//   }),
// })
//
// store.subscribe(() => {
//   console.log("state changed")
// })
//
// store.dispatch({ type: "ANY" })
//
// // Что нужно написать вместо XXX, чтобы в консоли увидеть 'state changed'?





// import axios from "axios"
// import { createRoot } from "react-dom/client"
// import { useEffect, useState } from "react"
//
// // Types
// type Product = {
//   id: string
//   title: string
//   description: string
//   price: number
// }
//
// type Film = {
//   id: number
//   nameOriginal: string
//   description: string
//   ratingImdb: number
// }
//
// type ProductsResponse = {
//   total: number
//   messages: string[]
//   page: number
//   pageCount: number
//   data: Product[]
// }
//
// type FilmsResponse = {
//   total: number
//   messages: string[]
//   page: number
//   pageCount: number
//   data: Film[]
// }
//
// type CommonResponse<T> = {
//   total: number
//   messages: string[]
//   page: number
//   pageCount: number
//   data: T[]
// }
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const api = {
//   getProducts() {
//     return instance.get<ProductsResponse>("products")
//   },
//   getFilms() {
//     return instance.get<FilmsResponse>("films")
//   },
// }
//
// // App
// const App = () => {
//   return (
//     <>
//       <h1>🛒 Products && 🎦 Films</h1>
//       <div style={{ display: "flex", justifyContent: "space-evenly" }}>
//         <Products />
//         <Films />
//       </div>
//     </>
//   )
// }
//
// const Products = () => {
//   const [products, setProducts] = useState<Product[]>([])
//
//   useEffect(() => {
//     api.getProducts().then((res) => setProducts(res.data.data))
//   }, [])
//
//   return (
//     <div style={{ width: "45%" }}>
//       <h2>🛒 Products</h2>
//       <div>
//         {products.map((p) => {
//           return (
//             <div key={p.id}>
//               <b>{p.title}</b>
//               <p>{p.description}</p>
//               <p>💵 {p.price} $</p>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }
//
// const Films = () => {
//   const [films, setFilms] = useState<Film[]>([])
//
//   useEffect(() => {
//     api.getFilms().then((res) => setFilms(res.data.data))
//   }, [])
//
//   return (
//     <div style={{ width: "45%" }}>
//       <h2>🎦 Films</h2>
//       <div>
//         {films.map((f) => {
//           return (
//             <div key={f.id}>
//               <b>{f.nameOriginal}</b>
//               <p>{f.description}</p>
//               <p>⭐ {f.ratingImdb} </p>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(<App />)
//
// // 📜 Описание:
// // При запуске проекта на экране вы увидите 2 списка: Products и Films.
// // С ними все хорошо, но обратите внимание на типизацию ответов с сервера ProductsResponse и FilmsResponse.
// // ❗Дублирование типов на лицо.
// // Ваша задача написать дженериковый тип CommonResponse и заменить им дублирующие типы.
// // ❗Очередность свойств в типах менять запрещено (по причине что нам будет тяжело перебрать все правильные варианты)
// // ❗Параметр тип назовите буквой T
// //
// // В качестве ответа нужно скопировать полностью рабочий дженериковый тип CommonResponse
// //
// // 🖥 Пример ответа:
// // type CommonResponse = {
// //   total: T
// //   messages: T[]
// //   page: T
// //   pageCount: T
// //   data: T[]
// // }







// const ownership = {
//   name: "Valera",
//   age: 90,
//   technologies: ["HTML", "", "REACT"],
// }
//
// export const [bravery = "FOO", fun = "BOO", tenderness = "DOO"] = ownership.technologies
//
// if (!fun) {
//   alert("HEY")
// }
//
// // Какую переменную следует указать вместо XXX, что бы была вызвана функция alert?





// type TracksState = {
//   volume: number // in percents
//   trackUrl: string // 'https://blabla.com/track01.mp3',
//   currentPlayPosition: number // milliseconds,
// }
//
// export const reducer = (state: TracksState, action: any) => {
//   switch (action.type) {
//     case "TRACK-URL-CHANGED":
//       return {
//         ...state,
//         trackUrl: action.url,
//       }
//     case "TRACK-MUTED":
//       return {
//         ...state,
//         volume: 0,
//       }
//     case "TRACK-REWOUND-TO-START":
//       return {
//         ...state,
//         currentPlayPosition: 0,
//       }
//     default:
//       return state
//   }
// }
//
// export const muteTrackAC = () => ({ type: "TRACK-MUTED" })
// export const changeTrackAC = (url: string) => ({ type: "TRACK-URL-CHANGED", url })
//
// // перемотатьНаНачало:
// export const rewindToStart = () => ({ type: "TRACK-REWOUND-TO-START" })
//
// // Какие типы должны быть вместо XXX, YYY и ZZZ?
// // Ответ дать через пробел, например:  'BLABLA' 'HEYНЕY' 'HIPHOP'





// export const reducer = (state: any, action: any) => {
//   switch (action.type) {
//     case "TRACK-ADDED":
//       return [...state, {id: action.id, likesCount:0 }]
//     default:
//       return state
//   }
// }
//
// const addTrackAC = (trackId: number) => ({ type: "TRACK-ADDED", trackId })
//
// const state = [
//   { id: 12, likesCount: 10 },
//   { id: 14, likesCount: 2 },
//   { id: 100, likesCount: 0 },
// ]
// const newState = reducer(state, addTrackAC(300))
//
// console.log(newState[3].likesCount === 0)
//
// // Что нужно написать вместо XXX, чтобы трек корректно добавился и в консоли увидеть true?





// import { Provider, useDispatch, useSelector } from "react-redux"
// import { createRoot } from "react-dom/client"
// import { configureStore } from "@reduxjs/toolkit"
//
// const listItemStyles = {
//   width: "100px",
//   borderBottom: "1px solid gray",
//   cursor: "pointer",
// }
//
// const students = {
//   students: [
//     { id: 1, name: "Bob" },
//     { id: 2, name: "Alex" },
//     { id: 3, name: "Donald" },
//     { id: 4, name: "Ann" },
//   ],
// }
//
// type RemoveStudentAT = {
//   type: "REMOVE-STUDENT"
//   id: number
// }
//
// export const removeStudentAC = (id: number): RemoveStudentAT => ({
//   type: "REMOVE-STUDENT",
//   id,
// })
//
// const studentsReducer = (state = students, action: RemoveStudentAT) => {
//   switch (action.type) {
//     case "REMOVE-STUDENT":
//       return {
//         ...state,
//         students: state.students.filter((s) => s.id !== action.id),
//       }
//     default:
//       return state
//   }
// }
//
// const store = configureStore({ reducer: studentsReducer })
// type RootStateType = ReturnType<typeof studentsReducer>
//
// const StudentList = () => {
//   const students = useSelector((state: RootStateType) => state.students)
//
//   const dispatch = useDispatch()
//
//   return (
//     <ol>
//       {students.map((s) => {
//         const removeStudent = () => {
//           dispatch(removeStudentAC(s.id))
//         }
//
//         return (
//           <li key={s.id} style={listItemStyles} onClick={removeStudent}>
//             {s.name}
//           </li>
//         )
//       })}
//     </ol>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <StudentList />
//   </Provider>,
// )
//
// // Что нужно написать вместо XXX, YYY и ZZZ, чтобы при клике по имени студент удалялся из списка?
// // Ответ дайте через пробел, например: doc cat fish





// import { Provider, useSelector } from "react-redux"
// import { createRoot } from "react-dom/client"
// import { configureStore } from "@reduxjs/toolkit"
//
// type Student = {
//   id: number
//   name: string
//   age: number
// }
//
// const initState = {
//   students: [
//     { id: 1, name: "Bob", age: 23 },
//     { id: 2, name: "Alex", age: 22 },
//   ] as Student[],
// }
//
// type AddStudentAction = {
//   type: "ADD-STUDENT"
//   name: string
//   age: number
//   id: number
// }
//
// type InitialState = typeof initState
//
// const studentsReducer = (state: InitialState = initState, action: AddStudentAction): InitialState => {
//   switch (action.type) {
//     case "ADD-STUDENT":
//       return {
//         ...state,
//         students: [
//           ...state.students,
//           {
//             name: action.name,
//             age: action.age,
//             id: action.id,
//           },
//         ],
//       }
//     default:
//       return state
//   }
// }
//
// export const appStore = configureStore({ reducer: studentsReducer })
// type RootState = ReturnType<typeof studentsReducer>
//
// const StudentList = () => {
//   const students = useSelector((state: RootState) => state.students)
//
//   return (
//     <ul>
//       {students.map((s) => (
//         <li key={s.id}>{`${s.name}. ${s.age} years.`}</li>
//       ))}
//     </ul>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={appStore}>
//     <StudentList />
//   </Provider>,
// )
// // Что нужно написать вместо XXX, YYY и ZZZ, чтобы отобразился список студентов?
// // Ответ дайте через пробел, например: doc cat fish




// //‼️НЕПРАВИЛЬНО
// const numbers = [71, 52, 50, 92]
// const mapFunction = (el: number, index: number) => el * index
// const mappedArray = numbers.map(mapFunction)
// console.log(mappedArray)
//
// const myNumber = mappedArray[0] && mappedArray[mappedArray.length - 1]
// console.log(myNumber)
// export const bigCount = 35 + myNumber
// console.log(bigCount)
// // Какое значение получит переменная bigCount?



// import axios from "axios"
// import { createRoot } from "react-dom/client"
// import { useEffect, useState } from "react"
//
// // Types
// type Todolist = {
//   id: string
//   tile: string //
//   order: number
//   createdAt: string
//   updatedAt: string
//   complete: boolean //
// }
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const todosAPI = {
//   getTodos() {
//     return instance.get<Todolist[]>("todos")
//   },
// }
//
// // App
// const App = () => {
//   const [todos, setTodos] = useState<Todolist[]>([])
//
//   useEffect(() => {
//     todosAPI.getTodos().then((res) => setTodos(res.data))
//   }, [])
//
//   return (
//     <>
//       <h2>✅ Список тудулистов</h2>
//       {todos.map((t) => {
//         return (
//           <div style={t.complete ? { color: "grey" } : {}} key={t.id}>
//             <input type="checkbox" checked={t.complete} />
//             <b>Описание</b>: {t.tile}
//           </div>
//         )
//       })}
//     </>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(<App />)
//
// // 📜 Описание:
// // При написании типизации по невнимательности было допущено несколько ошибок.
// // Напишите через пробел правильные свойства Todolist, в которых была допущена ошибка.
// // 💡 Debugger / network / документация в помощь
//
// // 🖥 Пример ответа: id age






// const value = 49
//
// const getValue = (value: any) => {
//   value += 31
//   return value //number
// }
//
//
// export const myResult = getValue("") || value
// console.log(myResult)
//
// // Какое значение получит переменная myResult?




// export const reducer = (state: any, action: any) => {
//   switch (action.type) {
//     case "USER-NAME-UPDATED":
//       return {...state, user: {...state.user, name: action.name}}
//
//     default:
//       return state
//   }
// }
//
// const updateUserNameAC = (name: string) => ({ type: "USER-NAME-UPDATED", name })
//
// const state = {
//   count: 10,
//   user: {
//     name: "Dimych",
//     age: 18,
//     isMarried: true,
//     status: "offline",
//   },
//   books: ["you don't know JS"],
// }
// const newState = reducer(state, updateUserNameAC("Dmitry"))
//
// console.log(newState.user.name === "Dmitry")
// console.log(newState.books === state.books)
// console.log(newState.user !== state.user)
//
// // Что нужно написать вместо XXX, чтобы корректно обновить имя пользователя
// // и в консоли увидеть: true true true?





// import { configureStore, combineReducers } from "@reduxjs/toolkit"
//
// let initialState = { items: [{ name: "Dimych" }, { name: "Ignat" }] }
// const usersReducer = (state = initialState, action: any) => {
//   return state
// }
//
// let authInitialState = { login: "Margo", settings: { theme: "dark" } }
// const authReducer = (state = authInitialState, action: any) => {
//   return state
// }
//
// const store = configureStore({
//   reducer: combineReducers({
//     users: usersReducer,
//     auth: authReducer
//   }),
// })
//
// store.subscribe(() => {
//   const login = store.getState().auth.login
//   console.log(login)
// })
//
// store.dispatch({ type: "ANY" })
// export default store
//
// // Что нужно написать вместо XXX, чтобы в консоли увидеть 'Margo'?






// import axios from "axios"
// import { useEffect, useState } from "react"
// import { createRoot } from "react-dom/client"
//
// // Types
// type Todolist = {
//   id: string
//   title: string
//   order: number
//   createdAt: string
//   updatedAt: string
//   completed: boolean
// }
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const todosAPI = {
//   getTodo(todoId: string) {
//     return instance.get<Todolist>(`todos/${todoId}`)
//   },
// }
//
// // App
// export const App = () => {
//   const [todo, setTodo] = useState<Todolist | null>(null)
//   const [error, setError] = useState<string>("")
//
//   useEffect(() => {
//     const todoId = "637cb9342f24ad82bcb07d8d"
//     todosAPI
//       .getTodo(todoId)
//       .then((res: any) => setTodo(res.data))
//       .catch(() => {
//         setError("Ошибка 😰. Анализируй network 😉")
//       })
//   }, [])
//
//   return (
//     <>
//       <h2>✅ Тудулист</h2>
//       {!!todo ? (
//         <div>
//           <div style={todo?.completed ? { color: "grey" } : {}} key={todo?.id}>
//             <input type="checkbox" checked={todo?.completed} />
//             <b>Описание</b>: {todo?.title}
//           </div>
//           <h2>Так держать. Ты справился 🚀</h2>
//         </div>
//       ) : (
//         <h2 style={{ color: "red" }}>{error}</h2>
//       )}
//     </>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(<App />)
//
// // 📜 Описание:
// // Студент по неопытности допустил одну маленькую ошибку, но из-за нее он не может вывести на экран тудулист.
// // Найдите ошибку и вставьте исправленную версию строки кода в качестве ответа
// // P.S. Эта ошибка из реальной жизни, студенты часто ошибаются подобным образом и не могут понять в чем дело.






// export const reducer = (state: any, action: any) => {
//   switch (action.type) {
//     case "TRACK-DELETED":
//       return state.filter((track: any) => track.id !== action.trackId)
//     default:
//       return state
//   }
// }
//
// const deleteTrackAC = (trackId: number) => ({ type: "TRACK-DELETED", trackId })
//
// const state = [
//   { id: 12, likesCount: 10 },
//   { id: 14, likesCount: 2 },
//   { id: 100, likesCount: 0 },
// ]
//
// const newState = reducer(state, deleteTrackAC(14))
// console.log(newState.length === 2)
//
// // Что нужно написать вместо XXX, чтобы корректно удалить трек и в консоли увидеть true?







// export const reducer = (state: any, action: any) => {
//   switch (action.type) {
//     case "TRACK-ADDED":
//       return {
//         ...state,
//         [action.trackId]: {
//           id: action.trackId,
//           likesCount: 0,
//         },
//       }
//     default:
//       return state
//   }
// }
//
// const addTrackAC = (trackId: number) => ({ type: "TRACK-ADDED", trackId })
//
// const state = {
//   12: { id: 12, likesCount: 10 },
//   14: { id: 14, likesCount: 2 },
//   100: { id: 100, likesCount: 0 },
// }
//
// const newState = reducer(state, addTrackAC(300))
// console.log(newState[300].likesCount === 0)
//
// // Что нужно написать вместо XXX, чтобы в консоли увидеть true?





// import axios from "axios"
// import { createRoot } from "react-dom/client"
// import { useEffect, useState } from "react"
//
// // Types
// type Post = {
//   id: string
//   body: string
//   title: string
//   userId: string
// }
//
// // Api
// export const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const postsAPI = {
//   getPosts() {
//     return  instance.get<Post[]>("posts")
//     // Promise.resolve() стоит в качестве заглушки, чтобы TS не ругался и код компилировался
//     // Promise.resolve() нужно удалить и написать правильный запрос для получения постов
//
//   },
// }
//
// // App
// export const App = () => {
//   const [posts, setPosts] = useState<Post[]>([])
//
//   useEffect(() => {
//     postsAPI.getPosts().then((res: any) => {
//       setPosts(res.data)
//     })
//   }, [])
//
//   return (
//     <>
//       <h1>📜 Список постов</h1>
//       {posts.length ? (
//         posts.map((p) => {
//           return (
//             <div key={p.id}>
//               <b>title</b>: {p.title}
//             </div>
//           )
//         })
//       ) : (
//         <h2>Постов нету 😥</h2>
//       )}
//     </>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(<App />)
//
// // 📜 Описание:
// // Напишите запрос на сервер для получения всех постов
// // Типизацию возвращаемых данных в ответе указывать необязательно, но можно и указать (в ответах учтены оба варианта).
// // Исправленную версию строки напишите в качестве ответа.





// const students = [{ name: "Bob" }, { name: "Alex" }, { name: "Donald" }]
// const filteredStudents = students.filter((s) => s.name !== "Kate")
// console.log(filteredStudents)
// const lengthDiff = students.length - filteredStudents.length
// export const newValue = (lengthDiff && 25.56) || (46.65 && 48.71)
// console.log(newValue)
//
// // Какое значение получит переменная newValue?



// ❤️// import { CSSProperties, useReducer, useState } from "react"
// import { createRoot } from "react-dom/client"
//
// const commonStyles: CSSProperties = {
//   border: "1px solid black",
//   margin: "100px auto",
//   width: "300px",
//   height: "150px",
//   textAlign: "center",
// }
//
// const btnStyles: CSSProperties = {
//   color: "white",
//   fontWeight: "bold",
//   backgroundColor: "darkgray",
//   borderRadius: "3px",
//   minWidth: "40px",
// }
//
// const changeCounter = (state: number, action: any): number => {
//   switch (action.type) {
//     case "INC_VALUE":
//       return state + 1
//     case "RESET":
//       return 0
//     case "DEC_VALUE":
//       return state - 1
//     default:
//       return state
//   }
// }
//
// const Counter = () => {
//   const [value, setValue] = useReducer(changeCounter, 0)
//   const [isCounter, setIsCounter] = useState(true)
//
//   return (
//     <div style={commonStyles}>
//       {isCounter && (
//         <div>
//           <div style={{ marginBottom: "20px" }}>
//             <h2>{value}</h2>
//             <button style={{ ...btnStyles, backgroundColor: "red" }} onClick={() => setIsCounter(false)}>
//               OFF
//             </button>
//           </div>
//           <button style={btnStyles} onClick={() => setValue({ type: "INC_VALUE" })}>
//             +
//           </button>
//           <button style={btnStyles} onClick={() => setValue({ type: "RESET" })}>
//             0
//           </button>
//           <button style={btnStyles} onClick={() => setValue({ type: "DEC_VALUE" })}>
//             -
//           </button>
//         </div>
//       )}
//       {!isCounter && (
//         <div style={{ textAlign: "center" }}>
//           <h2>Counter not working</h2>
//           <button style={{ ...btnStyles, backgroundColor: "green" }} onClick={() => setIsCounter(true)}>
//             ON
//           </button>
//         </div>
//       )}
//     </div>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(<Counter />)
//
// // Что надо написать вместо XXX и YYY, чтобы код работал? Напишите через пробел.



// import { configureStore, createSlice } from "@reduxjs/toolkit"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
//
// // slice
// const slice = createSlice({
//   name: "temperature",
//   initialState: {
//     celsius: 20,
//   },
//   reducers: {
//     increase: (state) => {
//       state.celsius += 1
//     },
//   },
//   selectors: {
//     selectCelsius: (state) => state.celsius,
//   },
// })
//
// const { increase } = slice.actions
// const { selectCelsius } = slice.selectors
//
// // App.tsx
// const App = () => {
//   const temp = useAppSelector(selectCelsius)
//   const dispatch = useAppDispatch()
//
//   return (
//     <>
//       <button onClick={() => dispatch(increase())}>Increase Temp</button>
//       <span>{temp}°C</span>
//     </>
//   )
// }
//
// // store.ts
// const store = configureStore({
//   reducer: {
//     temperature: slice.reducer,
//   },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// // main.ts
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // 📜 Описание:
// // При нажатии на кнопку Increase Temp температура не увеличивается 🥲
//
// // 🪛 Задача:
// // Перепишите изменение стейта таким образом, чтобы при нажатии на кнопку Increase Temp,
// // температура увеличивалась на 1 градус
// // В качестве ответа укажите исправленную строку кода.
// // ❗Изменение стейта должно быть написано мутабельным образом






// import { configureStore, createSlice, nanoid } from "@reduxjs/toolkit"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
//
// // slice
// const slice = createSlice({
//   name: "fruits",
//   initialState: {
//     basket: [
//       { id: 1, name: "Apple" },
//       { id: 2, name: "Banana" },
//     ],
//   },
//   reducers: {
//     addFruit: (state, action) => {
//       state.basket.push(action.payload)
//     },
//   },
//   selectors: {
//     selectBasket: (state) => state.basket,
//   },
// })
//
// const { addFruit } = slice.actions
// const { selectBasket } = slice.selectors
//
// // App.tsx
// const App = () => {
//   const fruits = useAppSelector(selectBasket)
//   const dispatch = useAppDispatch()
//
//   const addNewFruit = () => {
//     const newFruit = { id: nanoid(), name: "Orange" }
//     dispatch(addFruit(newFruit))
//   }
//
//   return (
//     <>
//       <button onClick={addNewFruit}>Add Fruit</button>
//       <ul>
//         {fruits.map((fruit) => (
//           <li key={fruit.id}>{fruit.name}</li>
//         ))}
//       </ul>
//     </>
//   )
// }
//
// // store.ts
// const store = configureStore({
//   reducer: {
//     fruits: slice.reducer,
//   },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// // main.ts
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // 📜 Описание:
// // При нажатии на кнопку Add Fruit, новый фрукт не добавляется в корзину 🥲
//
// // 🪛 Задача:
// // Перепишите изменение стейта таким образом, чтобы при нажатии на кнопку Add Fruit,
// // новый фрукт добавлялся в корзину
// // В качестве ответа укажите исправленную строку кода.
// // ❗Изменение стейта должно быть написано мутабельным образом






// import axios from "axios"
// import { createRoot } from "react-dom/client"
// import { useEffect, useState } from "react"
//
// // Types
// type Photo = {
//   albumId: string
//   id: string
//   title: string
//   url: string
// }
//
// type Payload = {
//   title: string
//   url?: string
// }
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const photoId = "637df6dc99fdc52af974a517"
//
// const photosAPI = {
//   getPhoto() {
//     return instance.get<Photo>(`photos/${photoId}`)
//   },
//   updatePhoto(payload: Payload) {
//     return instance.put<Photo>(`photos/${photoId}`, payload )
//   },
// }
//
// // App
// export const App = () => {
//   const [photo, setPhoto] = useState<Photo | null>(null)
//
//   useEffect(() => {
//     photosAPI.getPhoto().then((res) => {
//       setPhoto(res.data)
//     })
//   }, [])
//
//   const updatePhotoHandler = () => {
//     // ❗ title и url указаны в качестве заглушки. Server сам сгенерирует новый title
//     const payload = {
//       title: "Новый title",
//       url: "data:image/png;base64,iVBORw0FAKEADDRESSnwMZAABJRUrkJggg==",
//     }
//     photosAPI.updatePhoto(payload).then((res) => {
//       setPhoto(res.data)
//     })
//   }
//
//   return (
//     <>
//       <h1>📸 Фото</h1>
//       <div>
//         <div style={{ marginBottom: "15px" }}>
//           <h1>title: {photo?.title}</h1>
//           <div>
//             <img src={photo?.url} alt="" />
//           </div>
//         </div>
//         <button style={{ marginLeft: "15px" }} onClick={updatePhotoHandler}>
//           Изменить title
//         </button>
//       </div>
//     </>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(<App />)
//
// // 📜 Описание:
// // При нажатии на кнопку "Изменить title" title должен обновиться,
// // но из-за невнимательности была допущена ошибка и изменение не происходит
// //
// // Найдите и исправьте ошибку
// // Исправленную версию строки напишите в качестве ответа.



// import { configureStore, createSlice } from "@reduxjs/toolkit"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
//
// // slice
// const slice = createSlice({
//   name: "library",
//   initialState: {
//     collection: {
//       books: [
//         { id: 1, title: "1984" },
//         { id: 2, title: "Brave New World" },
//       ],
//     },
//   },
//   reducers: {
//     removeBook: (state, action) => {
//       const index = state.collection.books.findIndex(item => item.id === action.payload);
//       if (index !== -1) {
//         state.collection.books.splice(index, 1);
//       }
//
//     },
//   },
//   selectors: {
//     selectBooks: (state) => state.collection.books,
//   },
// })
//
// const { removeBook } = slice.actions
// const { selectBooks } = slice.selectors
//
// // App.tsx
// const App = () => {
//   const books = useAppSelector(selectBooks)
//   const dispatch = useAppDispatch()
//
//   const removeLastBook = () => {
//     if (books.length > 0) {
//       dispatch(removeBook(books[books.length - 1].id))
//     }
//   }
//
//   return (
//     <>
//       <button onClick={removeLastBook}>Remove Last Book</button>
//       <ul>
//         {books.map((book) => (
//           <li key={book.id}>{book.title}</li>
//         ))}
//       </ul>
//     </>
//   )
// }
//
// // store.ts
// const store = configureStore({
//   reducer: {
//     library: slice.reducer,
//   },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// // main.ts
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // 📜 Описание:
// // При нажатии на кнопку Remove Last Book, последняя книга в коллекции не удаляется 🥲
//
// // 🪛 Задача:
// // Перепишите изменение стейта таким образом, чтобы при нажатии на кнопку Remove Last Book,
// // последняя книга удалялась из коллекции.
// // В качестве ответа укажите исправленный код написанный вместо return state.
// // ❗Изменение стейта должно быть написано мутабельным образом.








// import axios from "axios"
// import { createRoot } from "react-dom/client"
// import { useEffect, useState } from "react"
//
// // Types
// type Post = {
//   body: string
//   id: string
//   title: string
//   userId: string
// }
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const postsAPI = {
//   getPosts() {
//     return instance.get<Post[]>("posts")
//   },
//   deletePost(id: string) {
//     return instance.delete<{ message: string }>(`posts/${id}`)
//   },
// }
//
// // App
// export const App = () => {
//   const [posts, setPosts] = useState<Post[]>([])
//
//   useEffect(() => {
//     postsAPI.getPosts().then((res) => {
//       setPosts(res.data)
//     })
//   }, [])
//
//   const deletePostHandler = (id: string) => {
//     postsAPI.deletePost(id).then((res) => {
//       const newPostsArr = posts.filter((p) => p.id !== id)
//       setPosts(newPostsArr)
//     })
//   }
//
//   return (
//     <>
//       <h1>📜 Список постов</h1>
//       {posts.map((p) => {
//         return (
//           <div key={p.id}>
//             <b>title</b>: {p.title}
//             <button style={{ marginLeft: "15px" }} onClick={() => deletePostHandler(p.id)}>
//               x
//             </button>
//           </div>
//         )
//       })}
//     </>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(<App />)
//
// // 📜 Описание:
// // Почему не удаляется post при нажатии на кнопку удаления (х) ?
// // Найдите ошибку и вставьте исправленную строку кода в качестве ответа




// import axios from "axios"
// import { createRoot } from "react-dom/client"
// import { useEffect, useState } from "react"
//
// // Types
// type Comment = {
//   postId: string
//   id: string
//   name: string
//   email: string
//   body: string
// }
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const commentsAPI = {
//   getComments() {
//     return instance.get<Comment[]>("comments")
//   },
//   createComment() {
//     const payload = {
//       body: "Это просто заглушка. Backend сам сгенерирует новый комментарий и вернет его вам",
//     }
//     // Promise.resolve() стоит в качестве заглушки, чтобы TS не ругался и код компилировался
//     // Promise.resolve() нужно удалить и написать правильный запрос для создания нового комментария
//     return instance.post(`comments`, payload)
//   },
// }
//
// // App
// export const App = () => {
//   const [comments, setComments] = useState<Comment[]>([])
//
//   useEffect(() => {
//     commentsAPI.getComments().then((res) => {
//       setComments(res.data)
//     })
//   }, [])
//
//   const createPostHandler = () => {
//     commentsAPI.createComment().then((res: any) => {
//       const newComment = res.data
//       setComments([newComment, ...comments])
//     })
//   }
//
//   return (
//     <>
//       <h1>📝 Список комментариев</h1>
//       <div style={{ marginBottom: "15px" }}>
//         <button style={{ marginLeft: "15px" }} onClick={() => createPostHandler()}>
//           Добавить новый комментарий
//         </button>
//       </div>
//
//       {comments.map((c) => {
//         return (
//           <div key={c.id}>
//             <b>Comment</b>: {c.body}{" "}
//           </div>
//         )
//       })}
//     </>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(<App />)
//
// // 📜 Описание:
// // Напишите запрос на сервер для создания нового комментария.
// // Типизацию возвращаемых данных в ответе указывать необязательно, но можно и указать (в ответах учтены оба варианта).
// // Исправленную версию строки напишите в качестве ответа.







// import { configureStore, createSlice } from "@reduxjs/toolkit"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
//
// // slice
// const slice = createSlice({
//   name: "classroom",
//   initialState: {
//     students: [
//       { id: 1, name: "Alice" },
//       { id: 2, name: "Bob" },
//       { id: 3, name: "Charlie" },
//     ],
//   },
//   reducers: {
//     removeStudent: (state, action) => {
//       const index = state.students.findIndex(item => item.id === action.payload);
//       if (index !== -1) {
//         state.students.splice(index, 1);
//       }
//     },
//   },
//   selectors: {
//     selectStudents: (state) => state.students,
//   },
// })
//
// const { removeStudent } = slice.actions
// const { selectStudents } = slice.selectors
//
// // App.tsx
// const App = () => {
//   const students = useAppSelector(selectStudents)
//   const dispatch = useAppDispatch()
//
//   const handleRemove = (id: number) => {
//     dispatch(removeStudent(id))
//   }
//
//   return (
//     <ul>
//       {students.map((student) => (
//         <li key={student.id}>
//           {student.name}
//           <button onClick={() => handleRemove(student.id)}>✖</button>
//         </li>
//       ))}
//     </ul>
//   )
// }
//
// // store.ts
// const store = configureStore({
//   reducer: {
//     classroom: slice.reducer,
//   },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// // main.ts
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // 📜 Описание:
// // При нажатии на кнопку ✖ рядом с именем студента, студент не удаляется из списка 🥲
//
// // 🪛 Задача:
// // Перепишите изменение стейта таким образом, чтобы при нажатии на кнопку ✖, студент удалялся из списка.
// // В качестве ответа укажите исправленный код написанный вместо return state.
// // ❗Изменение стейта должно быть написано мутабельным образом
// // ❗Не используйте деструктуризацию action.payload (const {id} = action.payload)
// // ❗Не создавайте переменные из action.payload (const id = action.payload.id)



// import { configureStore, createSlice } from "@reduxjs/toolkit"
// import { createRoot } from "react-dom/client"
// import { Provider, useSelector } from "react-redux"
//
// // slice
// const slice = createSlice({
//   name: "taskManager",
//   initialState: {
//     tasks: [
//       { id: 1, title: "Task 1" },
//       { id: 2, title: "Task 2" },
//       { id: 3, title: "Task 3" },
//     ],
//   },
//   reducers: {},
//   selectors: {
//     selectTasks: (state) => state.tasks
//   },
// })
//
// const { selectTasks } = slice.selectors
//
// // App.tsx
// const App = () => {
//   const tasks = useAppSelector(selectTasks)
//
//   return (
//     <>
//       <ul>
//         {tasks.map((task) => (
//           <li key={task.id}>{task.title}</li>
//         ))}
//       </ul>
//     </>
//   )
// }
//
// // store.ts
// const store = configureStore({
//   reducer: {
//     taskManager: slice.reducer,
//   },
// })
//
// type RootState = ReturnType<typeof store.getState>
// const useAppSelector = useSelector.withTypes<RootState>()
//
// // main.ts
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // 📜 Описание:
// // Перед вами нерабочий код и его нужно починить, чтобы отобразился массив тасок
//
// // 🪛 Задача:
// // Что нужно написать вместо // ❗❗❗XXX ❗❗❗, чтобы отобразился массив тасок






// import { configureStore, createAction, createSlice } from "@reduxjs/toolkit"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
//
//
//
// // waterCounter slice
// const waterSlice = createSlice({
//   name: "waterCounter",
//   initialState: {
//     liters: 10,
//   },
//   reducers: {
//     increase: (state) => {
//       state.liters += 1
//     },
//   },
//   selectors: {
//     selectLiters: (state) => state.liters,
//   },
// })
//
// const { increase } = waterSlice.actions
// const { selectLiters } = waterSlice.selectors
//
// // energy slice
// const energySlice = createSlice({
//   name: "energyCounter",
//   initialState: {
//     joules: 5000,
//   },
//   reducers: {
//     decrease: (state) => {
//       state.joules -= 100
//     },
//   },
//   selectors: {
//     selectJoules: (state) => state.joules,
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(waterSlice.actions.increase, (state, _action) => {
//         state.joules += 200
//       } )
//   }
// })
//
// const { decrease } = energySlice.actions
// const { selectJoules } = energySlice.selectors
//
// // App.tsx
// const App = () => {
//   const water = useAppSelector(selectLiters)
//   const energy = useAppSelector(selectJoules)
//   const dispatch = useAppDispatch()
//
//   return (
//     <>
//       <button onClick={() => dispatch(increase())}>Add Water</button>
//       <span>Water: {water} liters</span>
//
//       <button onClick={() => dispatch(decrease())}>Use Energy</button>
//       <span>Energy: {energy} joules</span>
//     </>
//   )
// }
//
// // store.ts
// const store = configureStore({
//   reducer: {
//     waterCounter: waterSlice.reducer,
//     energyCounter: energySlice.reducer,
//   },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// // main.ts
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // 📜 Описание:
// // У вас есть два счетчика: для воды (литры) и энергии (джоули).
// // При нажатии на кнопку **Add Water** увеличивается количество воды.
// // При нажатии на кнопку **Use Energy** энергия уменьшается на 100 джоулей.
//
// // 🪛 Задача:
// // Реализуйте следующую задачу:
// // При нажатии на кнопку **Add Water** помимо увелечения количества воды
// // реализуйте увеличении энергии на 200 джоулей.
//
// // В качестве ответа укажите добавленный вами код
// // ❗Операция должна быть реализована мутабельным образом.
// // 💡Подсказка. Используйте extraReducers



// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
// import axios from "axios"
// import { asyncThunkCreator, buildCreateSlice, configureStore } from "@reduxjs/toolkit"
//
// // Types
// type Photo = {
//   albumId: string
//   id: string
//   title: string
//   url: string
// }
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const photosAPI = {
//   getPhotos() {
//     return instance.get<Photo[]>("photos?delay=2")
//   },
// }
//
// // Slice
// const createAppSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })
//
// const slice = createAppSlice({
//   name: "photo",
//   initialState: {
//     photos: [] as Photo[],
//     isLoading: false,
//   },
//   selectors: {
//     selectPhotos: (state) => state.photos,
//     selectIsLoading: (state) => state.isLoading,
//   },
//   reducers: (create) => ({
//     setLoading: create.reducer<{ isLoading: boolean }>((state, action) => {
//       state.isLoading = action.payload.isLoading
//     }),
//     fetchPhotos: create.asyncThunk(
//       async (_arg, { dispatch, rejectWithValue }) => {
//         try {
//           dispatch(setLoading({ isLoading: true }))
//           const res = await photosAPI.getPhotos()
//
//           return { photos: res.data }
//           dispatch(setLoading({ isLoading: false }))
//         } catch (error) {
//           return rejectWithValue(null)
//         }
//       },
//       {
//         fulfilled: (state, action) => {
//           state.photos = action.payload.photos
//         },
//       },
//     ),
//   }),
// })
//
// const photoReducer = slice.reducer
// const { fetchPhotos, setLoading } = slice.actions
// const { selectPhotos, selectIsLoading } = slice.selectors
//
// // Loader
// const Loader = () => {
//   return <h1>🔘 Loading ...</h1>
// }
//
// // App
// const App = () => {
//   const dispatch = useAppDispatch()
//   const photos = useAppSelector(selectPhotos)
//   const isLoading = useAppSelector(selectIsLoading)
//
//   const getPhotosHandler = () => {
//     dispatch(fetchPhotos())
//   }
//
//   return (
//     <>
//       <h1>📸 Фото</h1>
//       <button onClick={getPhotosHandler}>Подгрузить фотографии</button>
//       {isLoading && <Loader />}
//       <div style={{ display: "flex", gap: "20px", margin: "20px" }}>
//         {photos.map((photo) => {
//           return (
//             <div key={photo.id}>
//               <b>title</b>: {photo.title}
//               <div>
//                 <img src={photo.url} alt="" />
//               </div>
//             </div>
//           )
//         })}
//       </div>
//     </>
//   )
// }
//
// // Store
// const store = configureStore({
//   reducer: {
//     [slice.name]: photoReducer,
//   },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // 📜 Описание:
// // При нажатии на кнопку "Подгрузить фотографии" вы должны увидеть Loading...,
// // и через 3 секунды непосредственно фотографии.
// // Но после подгрузки данных Loader не убирается.
// // Какой код нужно написать, чтобы Loader перестал отображаться после получения данных
// // В качестве ответа напишите строку кода.










// import { useEffect } from "react"
// import { Provider, useDispatch, useSelector } from "react-redux"
// import axios from "axios"
// import { asyncThunkCreator, buildCreateSlice, configureStore } from "@reduxjs/toolkit"
// import { createRoot } from "react-dom/client"
//
// // Types
// type Todolist = {
//   id: string
//   title: string
//   order: number
//   createdAt: string
//   updatedAt: string
//   completed: boolean
// }
//
// type User = {
//   id: string
//   name: string
//   age: number
// }
//
// type UsersResponse = {
//   items: User[]
//   totalCount: number
// }
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const api = {
//   getTodos() {
//     return instance.get<Todolist[]>("todos")
//   },
//   getUsers() {
//     return instance.get<UsersResponse>("users")
//   },
// }
//
// // Slice
// const createAppSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })
//
// const slice = createAppSlice({
//   name: "app",
//   initialState: {
//     todolists: [] as Todolist[],
//     users: [] as User[],
//     error: null as string | null,
//   },
//   selectors: {
//     selectTodolists: (state) => state.todolists,
//     selectUsers: (state) => state.users,
//     selectError: (state) => state.error,
//   },
//   reducers: (create) => ({
//     setError: create.reducer<{ error: string | null }>((state, action) => {
//       state.error = action.payload.error
//     }),
//     fetchTodolists: create.asyncThunk(
//       async (_arg, { rejectWithValue }) => {
//         try {
//           const res = await api.getTodos()
//           return {todolists: res.data}
//
//
//           // ❗AAA
//           // ❗BBB
//         } catch (error) {
//           return rejectWithValue(null)
//         }
//       },
//       {
//         fulfilled: (state, action) => {
//           state.todolists = action.payload.todolists
//         },
//       },
//     ),
//     fetchUsers: create.asyncThunk(
//       async (_arg, { rejectWithValue }) => {
//         try {
//           const res = await api.getUsers()
//           return {users: res.data.items}
//           // ❗CCC
//           // ❗DDD
//         } catch (error) {
//           return rejectWithValue(null)
//         }
//       },
//       {
//         fulfilled: (state, action) => {
//           state.users = action.payload.users
//         },
//       },
//     ),
//   }),
// })
//
// const appReducer = slice.reducer
// const { fetchTodolists, fetchUsers } = slice.actions
// const { selectTodolists, selectUsers, selectError } = slice.selectors
//
// // App
// const App = () => {
//   return (
//     <>
//       <h1>✅Todos & 🙂Users</h1>
//       <div style={{ display: "flex", justifyContent: "space-evenly" }}>
//         <Todos />
//         <Users />
//       </div>
//     </>
//   )
// }
//
// const Todos = () => {
//   const dispatch = useAppDispatch()
//   const todolists = useAppSelector(selectTodolists)
//   const error = useAppSelector(selectError)
//
//   useEffect(() => {
//     dispatch(fetchTodolists())
//   }, [])
//
//   return (
//     <div>
//       <h2>✅ Список тудулистов</h2>
//       {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
//       {todolists.map((todolist) => (
//         <div style={todolist.completed ? { color: "grey" } : {}} key={todolist.id}>
//           <input type="checkbox" checked={todolist.completed} />
//           <b>Описание</b>: {todolist.title}
//         </div>
//       ))}
//     </div>
//   )
// }
//
// const Users = () => {
//   const dispatch = useAppDispatch()
//   const users = useAppSelector(selectUsers)
//   const error = useAppSelector(selectError)
//
//   useEffect(() => {
//     dispatch(fetchUsers())
//   }, [])
//
//   return (
//     <div>
//       <h2>🙂 Список юзеров</h2>
//       {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
//       <div>
//         {users.map((user) => {
//           return (
//             <div key={user.id}>
//               <b>name</b>:{user.name} - <b>age</b>:{user.age}
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }
//
// // Store
// const store = configureStore({
//   reducer: {
//     [slice.name]: appReducer,
//   },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // 📜 Описание:
// // Что нужно написать вместо // ❗AAA, ❗BBB, ❗CCC, ❗DDD для того чтобы на экране
// // отобразился список тудулистов и юзеров
// // Каждый ответ укажите на новой строке или через пробел соблюдая порядок
//
// // Пример ответа:
// // const a = 1 + 1
// // return a
// // const c = 1 + 3
// // return c




// import { useEffect } from "react"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
// import axios from "axios"
// import { asyncThunkCreator, buildCreateSlice, configureStore } from "@reduxjs/toolkit"
//
// // Types
// type Post = {
//   id: string
//   body: string
//   title: string
//   userId: string
// }
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
//  const postsAPI = {
//   getPosts() {
//     return instance.get<Post[]>("posts")
//   },
// }
//
//
// // Slice
// const createAppSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })
//
// const slice = createAppSlice({
//   name: "posts",
//   initialState: {
//     posts: [] as Post[],
//   },
//   selectors: {
//     selectPosts: (state) => state.posts,
//   },
//   reducers: (create) => ({
//     fetchPosts: create.asyncThunk(
//       async (_arg, { rejectWithValue }) => {
//         console.log("AsyncThunk started")
//         try {
//           const res = await postsAPI.getPosts()
//           console.log("Response received:", res)
//           return { posts: res.data }
//         } catch (error) {
//           console.log("Error:", error)
//           return rejectWithValue(null)
//         }
//       },
//       {
//         fulfilled: (state, action) => {
//           state.posts = action.payload.posts
//         },
//       },
//     ),
//   }),
// })
//
// const postsReducer = slice.reducer
// const { fetchPosts } = slice.actions
// const { selectPosts } = slice.selectors
//
// // App
// const App = () => {
//   const dispatch = useAppDispatch()
//   const posts = useAppSelector(selectPosts)
//
//   useEffect(() => {
//     dispatch(fetchPosts())
//   }, [])
//
//   return (
//     <>
//       <h1>📜 Список постов</h1>
//       {posts.length ? (
//         posts.map((p) => {
//           return (
//             <div key={p.id}>
//               <b>title</b>: {p.title}
//             </div>
//           )
//         })
//       ) : (
//         <h2>Постов нету 😥</h2>
//       )}
//     </>
//   )
// }
//
// // Store
// const store = configureStore({
//   reducer: {
//     [slice.name]: postsReducer,
//   },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // 📜 Описание:
// // При загрузке приложения вы должны увидеть список постов,
// // но из-за невнимательности была допущена ошибка.
//
// // Найдите и исправьте ошибку
// // Исправленную версию строки напишите в качестве ответа.
//
// // P.S. Эта ошибка из реальной жизни, студенты так часто ошибаются и не могут понять в чем дело.






// import { useEffect } from "react"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
// import axios from "axios"
// import { asyncThunkCreator, buildCreateSlice, configureStore } from "@reduxjs/toolkit"
//
// // Types
// type Post = {
//   id: string
//   body: string
//   title: string
//   userId: string
// }
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/ " })
//
// const postsAPI = {
//   getPosts() {
//     return instance.get<Post[]>("posts")
//   },
// }
//
// // Slice
// const createAppSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })
//
// const slice = createAppSlice({
//   name: "posts",
//   initialState: {
//     posts: [] as Post[],
//     error: null as string | null,
//   },
//   selectors: {
//     selectPosts: (state) => state.posts,
//     selectError: (state) => state.error,
//   },
//   reducers: (create) => ({
//     setError: create.reducer<{ error: string | null }>((state, action) => {
//       state.error = action.payload.error
//     }),
//     fetchPosts: create.asyncThunk<{ posts: Post[] }, void, { rejectValue: string }>(
//       async (_arg, { rejectWithValue }) => {
//         try {
//           const res = await postsAPI.getPosts()
//           return { posts: res.data }
//         } catch (error) {
//           let errorMessage = "Some error occurred"
//           if (axios.isAxiosError(error)) {
//             errorMessage = error.message || errorMessage
//           } else if (error instanceof Error) {
//             errorMessage = `Native error: ${error.message}`
//           } else {
//             errorMessage = JSON.stringify(error)
//           }
//           return rejectWithValue(errorMessage)
//         }
//       },
//       {
//         fulfilled: (state, action) => {
//           state.posts = action.payload.posts
//         },
//         rejected: (state, action) => {
//           state.error = action.payload || "Some error occurred"
//         }
//         // ❗XXX
//       },
//     ),
//   }),
// })
//
// const postsReducer = slice.reducer
// const { fetchPosts } = slice.actions
// const { selectPosts, selectError } = slice.selectors
//
// // App
// const App = () => {
//   const dispatch = useAppDispatch()
//
//   const posts = useAppSelector(selectPosts)
//   const error = useAppSelector(selectError)
//
//   useEffect(() => {
//     dispatch(fetchPosts())
//   }, [])
//
//   return (
//     <>
//       <h1>📜 Список постов</h1>
//       {posts.map((post) => (
//         <div key={post.id}>
//           <b>Описание</b>: {post.body}
//         </div>
//       ))}
//       <h2 style={{ color: "red" }}>{!!error && error}</h2>
//     </>
//   )
// }
//
// // Store
// const store = configureStore({
//   reducer: {
//     [slice.name]: postsReducer,
//   },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // 📜 Описание:
// // ❌ Посты не подгрузились. Произошла какая-то ошибка.
// // ❗Чинить приложение не нужно (если только для себя, в ответе это не учитывается).
// // Что необходимо написать вместо `// ❗XXX` чтобы на экране отобразилась ошибка: Request failed with status code 404.
// // А если вернется undefined, то показать пользователю ошибку по умолчанию: "Some error occurred"
// // ❗Выносить "Some error occurred" в переменную не нужно
// // ❗Ответ можно писать в несколько строк, в экзамене это учтено






// import { ChangeEvent, FormEvent, useState } from "react"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
// import axios from "axios"
// import { asyncThunkCreator, buildCreateSlice, configureStore } from "@reduxjs/toolkit"
//
// // Types
// type LoginFields = {
//   email: string
//   password: string
// }
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const api = {
//   login(data: LoginFields) {
//     return instance.post<{ token: string }>("auth/login", data)
//   },
// }
//
// // Slice
// const createAppSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })
//
// const slice = createAppSlice({
//   name: "app",
//   initialState: {
//     error: null as string | null,
//     isLoggedIn: false,
//   },
//   selectors: {
//     selectError: (state) => state.error,
//   },
//   reducers: (create) => ({
//     setError: create.reducer<{ error: string | null }>((state, action) => {
//       state.error = action.payload.error
//     }),
//     login: create.asyncThunk(
//       async (data: LoginFields, thunkAPI) => {
//         try {
//           await api.login(data)
//           return { isLoggedIn: true }
//         } catch (error: any) {
//           // ❗XXX
//           let errorMessage = error.response?.data?.errors || error.message
//           thunkAPI.dispatch(setError({ error: errorMessage }))
//           return thunkAPI.rejectWithValue(null)
//         }
//       },
//       {
//         fulfilled: (state, action) => {
//           state.isLoggedIn = action.payload.isLoggedIn
//         },
//       },
//     ),
//   }),
// })
//
// const appReducer = slice.reducer
// const { login, setError } = slice.actions
// const { selectError } = slice.selectors
//
// // Login
// const Login = () => {
//   const dispatch = useAppDispatch()
//
//   const [data, setData] = useState<LoginFields>({ email: "", password: "" })
//
//   const error = useAppSelector(selectError)
//
//   const changeFormValuesHandler = (e: ChangeEvent<HTMLInputElement>) => {
//     setData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }))
//   }
//
//   const submitForm = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     dispatch(login(data))
//   }
//
//   return (
//     <>
//       {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
//       <form onSubmit={submitForm}>
//         <input name="email" placeholder={"Введите email"} value={data.email} onChange={changeFormValuesHandler} />
//         <input
//           name="password"
//           type={"password"}
//           placeholder={"Введите пароль"}
//           value={data.password}
//           onChange={changeFormValuesHandler}
//         />
//         <button type="submit">Залогиниться</button>
//       </form>
//     </>
//   )
// }
//
// // Store
// const store = configureStore({
//   reducer: {
//     [slice.name]: appReducer,
//   },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <Login />
//   </Provider>,
// )
// // 📜 Описание:
// // Перед вами форма логинизации. Введите любые логин и пароль и попробуйте залогиниться.
// // У вас это навряд ли получится 😈, т.к. вы не знаете email и пароль.
// // Откройте Network и проанализируйте запрос.
// // Что необходимо написать вместо `// ❗XXX` чтобы на экране отобразилась ошибка говорящая о том,
// // что email или password некорректны.
// // ❗ Типизировать error не надо
// // ❗ Ошибку по умолчанию ("Some error occurred") отрабатывать не нужно




// import { Dispatch, useEffect } from "react"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
// import axios from "axios"
// import { asyncThunkCreator, buildCreateSlice, configureStore } from "@reduxjs/toolkit"
//
// // Types
// type Todolist = {
//   id: string
//   title: string
//   order: number
//   createdAt: string
//   updatedAt: string
//   completed: boolean
// }
//
// type User = {
//   id: string
//   name: string
//   age: number
// }
//
// type UsersResponse = {
//   items: User[]
//   totalCount: number
// }
//
// // API
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const api = {
//   getTodos() {
//     return instance.get<Todolist[]>("todo")
//   },
//   getUsers() {
//     return instance.get<UsersResponse>("user")
//   },
// }
//
// // Slice
// const createAppSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })
//
// const slice = createAppSlice({
//   name: "app",
//   initialState: {
//     todolists: [] as Todolist[],
//     users: [] as User[],
//     error: null as string | null,
//   },
//   selectors: {
//     selectTodolists: (state) => state.todolists,
//     selectUsers: (state) => state.users,
//     selectError: (state) => state.error,
//   },
//   reducers: (create) => ({
//     setError: create.reducer<{ error: string | null }>((state, action) => {
//       state.error = action.payload.error
//     }),
//     fetchTodolists: create.asyncThunk(
//       async (_arg, { dispatch, rejectWithValue }) => {
//         try {
//           const res = await api.getTodos()
//           return { todolists: res.data }
//         } catch (error: any) {
//           handleErrors(dispatch, error.message)
//           return rejectWithValue(null)
//         }
//       },
//       {
//         fulfilled: (state, action) => {
//           state.todolists = action.payload.todolists
//         },
//       },
//     ),
//     fetchUsers: create.asyncThunk(
//       async (_arg, { dispatch, rejectWithValue }) => {
//         try {
//           const res = await api.getUsers()
//           return { users: res.data.items }
//         } catch (error: any) {
//           handleErrors(dispatch, error.message)
//           return rejectWithValue(null)
//         }
//       },
//       {
//         fulfilled: (state, action) => {
//           state.users = action.payload.users
//         },
//       },
//     ),
//   }),
// })
//
// const appReducer = slice.reducer
// const { setError, fetchTodolists, fetchUsers } = slice.actions
// const { selectTodolists, selectUsers, selectError } = slice.selectors
//
// // Utils functions
// const handleErrors = (dispatch: Dispatch, error: string) => {
//   // let errorMessage
//   // if (axios.isAxiosError(error)) {
//   //   errorMessage = error.response?.data?.message || error.message
//   // } else if (error instanceof Error) {
//   //   errorMessage = `Native error: ${error.message}`
//   // } else {
//   //   errorMessage = JSON.stringify(error)
//   // }
//   // dispatch(setError({ error: errorMessage }))
//
//   dispatch(setError({ error: error }))
// }
//
// const App = () => {
//   return (
//     <>
//       <h1>✅Todos & 🙂Users</h1>
//       <div style={{ display: "flex", justifyContent: "space-evenly" }}>
//         <Todos />
//         <Users />
//       </div>
//     </>
//   )
// }
//
// const Todos = () => {
//   const dispatch = useAppDispatch()
//   const todolists = useAppSelector(selectTodolists)
//   const error = useAppSelector(selectError)
//
//   useEffect(() => {
//     dispatch(fetchTodolists())
//   }, [])
//
//   return (
//     <div>
//       <h2>✅ Список тудулистов</h2>
//       {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
//       {todolists.map((todolist) => (
//         <div style={todolist.completed ? { color: "grey" } : {}} key={todolist.id}>
//           <input type="checkbox" checked={todolist.completed} />
//           <b>Описание</b>: {todolist.title}
//         </div>
//       ))}
//     </div>
//   )
// }
//
// const Users = () => {
//   const dispatch = useAppDispatch()
//   const users = useAppSelector(selectUsers)
//   const error = useAppSelector(selectError)
//
//   useEffect(() => {
//     dispatch(fetchUsers())
//   }, [])
//
//   return (
//     <div>
//       <h2>🙂 Список юзеров</h2>
//       {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
//       <div>
//         {users.map((user) => (
//           <div key={user.id}>
//             <b>name</b>:{user.name} - <b>age</b>:{user.age}
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
//
// // Store
// const store = configureStore({
//   reducer: {
//     [slice.name]: appReducer,
//   },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
// // 📜 Описание:
// // Откройте network и вы увидите что запросы за тудулистами и пользователями падают с ошибками,
// // но пользователе не видит ошибок, потому что утилитная функция handleErrors написана неверно.
// // Ваша задача дописать функцию handleErrors, чтобы пользователь на экране увидел ошибки:
// // 'Request failed with status code 404'
// //❗ Код фиксить не нужно.
// //❗ Тип any типизации указывать запрещено
// // В качестве ответа укажите полностью написанную функцию
//
// // Пример ответа:
// // const handleErrors = () => {
// //   console.log("error")
// // }





// import { useEffect } from "react"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
// import axios from "axios"
// import { asyncThunkCreator, buildCreateSlice, configureStore } from "@reduxjs/toolkit"
//
// // Types
// type Comment = {
//   postId: string
//   id: string
//   name: string
//   email: string
//   body: string
// }
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const commentsAPI = {
//   getComments() {
//     return instance.get<Comment[]>("comments")
//   },
// }
//
// // Slice
// const createAppSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })
//
// const slice = createAppSlice({
//   name: "comments",
//   initialState: {
//     comments: [] as Comment[],
//     error: null as string | null,
//   },
//   selectors: {
//     selectComments: (state) => state.comments,
//     selectError: (state) => state.error,
//   },
//   reducers: (create) => ({
//     fetchPhotos: create.asyncThunk(
//       async (_arg, { rejectWithValue }) => {
//         try {
//           const res = await commentsAPI.getComments()
//           return { comments: res.data }
//         } catch (error) {
//           return rejectWithValue(error)
//         }
//       },
//       {
//         fulfilled: (state, action) => {
//           state.comments = action.payload.comments
//           state.error = null
//         },
//         rejected: (state) => {
//           state.error = "❌ Комментарии не подгрузились. Произошла какая-то ошибка. Найди и исправь ее"
//         },
//       },
//     ),
//   }),
// })
//
// const commentsReducer = slice.reducer
// const { fetchPhotos } = slice.actions
// const { selectComments, selectError } = slice.selectors
//
// // App
// export const App = () => {
//   const dispatch = useAppDispatch()
//
//   const comments = useAppSelector(selectComments)
//   const error = useAppSelector(selectError)
//
//   useEffect(() => {
//     dispatch(fetchPhotos())
//   }, [])
//
//   return (
//     <>
//       <h1>📝 Список комментариев</h1>
//       <h2>{!!error && error}</h2>
//       {comments.map((c) => {
//         return (
//           <div key={c.id}>
//             <b>Comment</b>: {c.body}{" "}
//           </div>
//         )
//       })}
//     </>
//   )
// }
//
// // Store
// const store = configureStore({
//   reducer: {
//     [slice.name]: commentsReducer,
//   },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // 📜 Описание:
// // ❌ Комментарии не подгрузились. Произошла какая-то ошибка.
// // В данном задании вам нужно найти ошибку и починить приложение.
// // Если сделаете все верно, то увидите комментарии.
// // В качестве ответа указать исправленную строку коду







// // Задача: Получение первого элемента массива
// // Реализуй дженериковую функцию getFirstElement<T>,
// // которая принимает массив элементов и возвращает первый элемент массива.
// // Если массив пуст, функция должна вернуть undefined
//
// const getFirstElement = <T>(arr: T[]): T  => {
//   return arr[0]
// }
//
// // Примеры использования:
// console.log(getFirstElement([1, 2, 3])) // 1
// console.log(getFirstElement(["apple", "banana", "cherry"])) // "apple"
// console.log(getFirstElement([])) // undefined
//
// // В качестве ответа напиши переписанную функцию getFirstElement
// // ❗Для обозначения дженерика используйте `T`
// // Пример ответа:
// // const getFirstElement = (arr: T): T => {
// //   return arr
// // }




// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
// import axios from "axios"
// import { asyncThunkCreator, buildCreateSlice, configureStore } from "@reduxjs/toolkit"
//
// // Types
// type Photo = {
//   albumId: string
//   id: string
//   title: string
//   url: string
// }
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const photosAPI = {
//   getPhotos() {
//     const url = Math.random() < 0.5 ? "photos" : "pictures👺"
//     return instance.get<Photo[]>(`${url}?delay=2`)
//   },
// }
//
// // Slice
// const createAppSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })
//
// const slice = createAppSlice({
//   name: "photo",
//   initialState: {
//     photos: [] as Photo[],
//     isLoading: false,
//     error: null as string | null,
//   },
//   selectors: {
//     selectPhotos: (state) => state.photos,
//     selectIsLoading: (state) => state.isLoading,
//     selectError: (state) => state.error,
//   },
//   reducers: (create) => ({
//     setLoading: create.reducer<{ isLoading: boolean }>((state, action) => {
//       state.isLoading = action.payload.isLoading
//     }),
//     fetchPhotos: create.asyncThunk(
//       async (_arg, { dispatch, rejectWithValue }) => {
//         try {
//           dispatch(setLoading({ isLoading: true }))
//           const res = await photosAPI.getPhotos()
//           return { photos: res.data }
//         } catch (error) {
//           return rejectWithValue(null)
//         }
//       },
//       {
//         fulfilled: (state, action) => {
//           state.photos = action.payload.photos
//           state.error = null
//           // state.isLoading = false
//         },
//         rejected: (state) => {
//           state.error = "Error retrieving photos"
//           // state.isLoading = false
//         },
//         // ❗ XXX
//         pending: (state) => {
//           state.isLoading = true
//         },
//         settled: (state) => {
//           state.isLoading = false
//         }
//
//       },
//     ),
//   }),
// })
//
// const photoReducer = slice.reducer
// const { fetchPhotos, setLoading } = slice.actions
// const { selectPhotos, selectIsLoading, selectError } = slice.selectors
//
// // Loader
// const Loader = () => {
//   return <h1>🔘 Loading ...</h1>
// }
//
// // App
// const App = () => {
//   const dispatch = useAppDispatch()
//
//   const photos = useAppSelector(selectPhotos)
//   const isLoading = useAppSelector(selectIsLoading)
//   const error = useAppSelector(selectError)
//
//   const getPhotosHandler = () => {
//     dispatch(fetchPhotos())
//   }
//
//   return (
//     <>
//       <h1>📸 Фото</h1>
//       <h2 style={{ color: "red" }}>{!!error && error}</h2>
//       {isLoading && <Loader />}
//       <button onClick={getPhotosHandler}>Подгрузить фотографии</button>
//       <div style={{ display: "flex", gap: "20px", margin: "20px" }}>
//         {photos.map((photo) => {
//           return (
//             <div key={photo.id}>
//               <b>title</b>: {photo.title}
//               <div>
//                 <img src={photo.url} alt="" />
//               </div>
//             </div>
//           )
//         })}
//       </div>
//     </>
//   )
// }
//
// // Store
// const store = configureStore({
//   reducer: {
//     [slice.name]: photoReducer,
//   },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
// // 📜 Описание:
// // Фотографии с вероятностью в 50% подгружаюся успешно или падают с ошибкой.
// // При нажатии на кнопку "Подгрузить фотографии" с вероятностью в 50% подгружаюся успешно или падают с ошибкой.
// // Но Loader висит всегда.
// // Что необходимо написать вместо `//❗ XXX`, чтобы спрятать Loader независимо от того, как завершится запрос на сервер.
// // Т.е. если ответ придет успешный - Loader убираем
// //      если ответ придет с ошибкой - Loader тоже убираем.
// // ❗Ответ можно писать в несколько строк, в экзамене это учтено



// import { useEffect } from "react"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
// import axios from "axios"
// import { asyncThunkCreator, buildCreateSlice, configureStore } from "@reduxjs/toolkit"
//
// // Types
// type DomainPost = Post & {
//   disabled: boolean
// }
//
// type Post = {
//   body: string
//   id: string
//   title: string
//   userId: string
// }
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const postsAPI = {
//   getPosts() {
//     return instance.get<Post[]>("posts")
//   },
//   deletePost(id: string) {
//     return instance.delete<{ message: string }>(`posts/${id}?delay=3`)
//   },
// }
//
// // Slice
// const createAppSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })
//
// const slice = createAppSlice({
//   name: "posts",
//   initialState: {
//     isLoading: false,
//     posts: [] as DomainPost[],
//   },
//   selectors: {
//     selectPosts: (state) => state.posts,
//     selectIsLoading: (state) => state.isLoading,
//   },
//   reducers: (create) => ({
//     setLoading: create.reducer<{ isLoading: boolean }>((state, action) => {
//       state.isLoading = action.payload.isLoading
//     }),
//     setDisable: create.reducer<{ disabled: boolean; id: string }>((state, action) => {
//       const post = state.posts.find((post) => post.id === action.payload.id)
//       if (post) {
//         post.disabled = action.payload.disabled
//       }
//     }),
//     fetchPosts: create.asyncThunk(
//       async (_arg, { rejectWithValue }) => {
//         try {
//           const res = await postsAPI.getPosts()
//           return { posts: res.data }
//         } catch (error) {
//           return rejectWithValue(null)
//         }
//       },
//       {
//         fulfilled: (state, action) => {
//           action.payload.posts.forEach((post) => {
//             state.posts.push({ ...post, disabled: false })
//           })
//         },
//       },
//     ),
//     deletePost: create.asyncThunk(
//       async (id: string, { dispatch, rejectWithValue }) => {
//         try {
//           dispatch(setLoading({ isLoading: true }))
//           dispatch(setDisable({ disabled: true, id }))
//           await postsAPI.deletePost(id)
//           return { id }
//         } catch (error) {
//           dispatch(setDisable({ disabled: false, id }))
//           return rejectWithValue(null)
//         } finally {
//           dispatch(setLoading({ isLoading: false }))
//         }
//       },
//       {
//         fulfilled: (state, action) => {
//           const index = state.posts.findIndex((post) => post.id === action.payload.id)
//           if (index !== -1) {
//             state.posts.splice(index, 1)
//           }
//         },
//       },
//     ),
//   }),
// })
//
// const postsReducer = slice.reducer
// const { setLoading, fetchPosts, deletePost, setDisable } = slice.actions
// const { selectPosts, selectIsLoading } = slice.selectors
//
// // Loader
// const Loader = () => {
//   return <h1>🔘 Loading ...</h1>
// }
//
// // App
// const App = () => {
//   const dispatch = useAppDispatch()
//
//   const posts = useAppSelector(selectPosts)
//   const isLoading = useAppSelector(selectIsLoading)
//
//   useEffect(() => {
//     dispatch(fetchPosts())
//   }, [])
//
//   const deletePostHandler = (id: string) => {
//     dispatch(deletePost(id))
//   }
//
//   return (
//     <>
//       <div style={{ position: "absolute", top: "0px" }}>{isLoading && <Loader />}</div>
//       <div style={{ marginTop: "100px" }}>
//         <h1>📜 Список постов</h1>
//         {posts.map((post) => {
//           return (
//             <div key={post.id}>
//               <b>title</b>: <span style={{ marginRight: "15px" }}>{post.title}</span>
//               <button onClick={() => deletePostHandler(post.id)} disabled={post.disabled}>удалить пост</button>
//             </div>
//           )
//         })}
//       </div>
//     </>
//   )
// }
//
// // Store
// const store = configureStore({
//   reducer: {
//     [slice.name]: postsReducer,
//   },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
// // 📜 Описание:
// // Перед вами список постов.
// // Откройте network и быстро нажмите на кнопку удалить пост несколько раз подряд.
// // Откройте вкладку Preview и проанализируйте ответ с сервера
// // Первое сообщение будет "Post has been successfully deleted",
// // а следующие "Post with id: 63626ac315d01f80765587ee does not exist"
// // Т.е. бэкенд первый раз удаляет, а потом уже не может, т.к. пост удален из базы данных.
//
// // Ваша задача при первом клике задизаблить кнопку удаления,
// // соответсвенно не давать пользователю возможности слать повторные запросы.
// // ❗ Необходимо задизаблить кнопку именно удаляемого поста, а не все кнопки.
// // ❗ В качестве ответа укажите добавленный код






// import { CSSProperties } from "react"
// import { createRoot } from "react-dom/client"
// import { SubmitHandler, useForm } from "react-hook-form"
//
// const error: CSSProperties = {
//   color: "red",
//   fontWeight: "bold",
// }
//
// type Inputs = {
//   firstName: string
//   email: string
// }
//
// const Login = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<Inputs>({
//     defaultValues: { firstName: "", email: "" },
//   })
//
//   const onSubmit: SubmitHandler<Inputs> = (data) => {
//     alert(JSON.stringify(data, null, 2))
//   }
//
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <input {...register("firstName")} placeholder={"Введите имя"} />
//       </div>
//       <div>
//         <input
//           {...register("email", {
//             required: "Email is required",
//             pattern: {
//               value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: "Incorrect email", },
//           })}
//           placeholder={"Введите email"}
//         />
//         {!!errors.email && <div style={error}>{errors.email.message}</div>}
//       </div>
//       <button type="submit">Отправить</button>
//     </form>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(<Login />)
//
// // 📜 Описание:
// // Загрузив приложение вы увидите ошибку под полем email, но вы еще ничего не ввели.
// // Исправьте строку кода которая выводит сообщение удовлетворяющее условиям:
// // 1) Сообщение об ошибке показывалось только в том случае, когда email введен некорректно.
// // 2) Вместо ERROR должен быть конкретный текст ошибки прописанный в валидации к этому полю.
// // Исправленную версию строки напишите в качестве ответа.
//
// // 🖥 Пример ответа: {<div style={error}>Incorrect email</div>}







// import { createRoot } from "react-dom/client"
// import { BrowserRouter, Route, Routes } from "react-router"
//
// export const Main = () => {
//   return (
//     <>
//       <h2>✅ Список тудулистов</h2>
//       <h2>📜 Список постов</h2>
//     </>
//   )
// }
//
// // App
// export const App = () => {
//   return (
//         <Routes>
//         <Route path={"/"} element={<Main />} />
//       </Routes>
//
//
//   )
// }
//
// createRoot(document.getElementById("root")!).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// )
//
// // 📜 Описание:
// // Белый экран... Приложение не работает.
// // Какие изменения необходимо сделать в строке
// // createRoot(document.getElementById("root")!).render(<App />)
// // чтобы приложение заработало и на экране отобразилось 2 заголовка
// // Исправленную версию строки напишите в качестве ответа.
// // 💡Ответ может быть в несколько строк
//
// // Пример ответа:
// // createRoot(document.getElementById("root")!).render(<App />)




// import { createRoot } from "react-dom/client"
// import { SubmitHandler, useForm } from "react-hook-form"
//
// type Inputs = {
//   name: string
// }
//
// export const Login = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { isValid, isDirty },
//   } = useForm<Inputs>({
//     defaultValues: { name: "" },
//   })
//
//   const onSubmit: SubmitHandler<Inputs> = (data) => {
//     const minLength = 5
//     if (data.name.length < minLength) {
//       alert(`❌ FirstName must be at least ${minLength} characters long`)
//     } else {
//       alert(JSON.stringify(data, null, 2))
//     }
//   }
//
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <input {...register("name", {
//             minLength: {
//               value: 5,
//               message: 'Error'
//             }
//           }
//         )} />
//       </div>
//       <button type="submit" disabled={!(isValid && isDirty)}>
//         Отправить
//       </button>
//     </form>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(<Login />)
//
// // 📜 Описание:
// // Начните вводить символы в input. После ввода первого символа кнопка "Отправить" раздизаблится.
// // Задача: кнопка "Отправить" должна раздизаблиться только в том случае, если длинна имени больше, либо равна 5 символам.
// // ❗Текст ошибки выводить в разметке не нужно.
// // ❗Сторонние библиотеки (например zod, yup) использовать запрещено.
// // ❗Если используете свой message для обработки ошибки, то в качестве текста ошибки напишите 'Error'
//
// // В качестве ответа напишите полностью тег в котором вы изменяли значения
// // 🖥 Пример ответа: <input {...register("name", {disabled })} />






// import { useEffect } from "react"
// import { createRoot } from "react-dom/client"
// import { BrowserRouter, Route, Routes, useNavigate, useParams } from "react-router"
//
// const Login = () => {
//   const navigate = useNavigate()
//
//   useEffect(() => {
//     navigate("/secret/JIUzI1NiIsInR5cCI6IkpXVCJ9")
//   }, [])
//
//   return <div>Login</div>
// }
//
// const SecretToken = () => {
//   const { token } = useParams()// ❗ FIX
//
//   return <h1>🦾 token: {token}</h1>
// }
//
// createRoot(document.getElementById("root")!).render(
//   <BrowserRouter>
//     <Routes>
//       <Route path={"/"} element={<Login />} />
//       <Route path={"/secret/:token"} element={<SecretToken />} />
//     </Routes>
//   </BrowserRouter>,
// )
//
// // 📜Описание:
// // Исправьте код на строке с пометкой ❗FIX так, чтобы на странице отобразился токен.
//
// //❗Ответ можно указывать с типизацией и без. Учтено несколько вариантов
//
// // 🖥 Пример ответа: const token = 'JIUzI1NiIsInR5cCI6IkpXVCJ9'



// import { CSSProperties } from "react"
// import { createRoot } from "react-dom/client"
// import { BrowserRouter, NavLink, Route, Routes } from "react-router"
//
// const footer: CSSProperties = {
//   padding: 10,
//   background: "lightslategrey",
// }
//
// const link: CSSProperties = {
//   color: "lightsalmon",
//   fontSize: 20,
// }
//
// const activeLink: CSSProperties = {
//   fontWeight: "bold",
//   color: "red",
//   fontSize: 20,
// }
//
// const Dragons = () => {
//   return <h1>🐲 🐲 🐲</h1>
// }
//
// const Cats = () => {
//   return <h1>😺 🐱 😼</h1>
// }
//
// const Dogs = () => {
//   return <h1>🐶 🐶 🐶</h1>
// }
//
// const Menu = () => {
//   return (
//     <ul>
//       <li>
//         <NavLink to={Path.Dragons} style={({ isActive }) => isActive ? activeLink : link}>
//           dragons
//         </NavLink>
//       </li>
//       <li>
//         <NavLink to={Path.Cats} style={({ isActive }) => isActive ? activeLink : link}>
//           cats
//         </NavLink>
//       </li>
//       <li>
//         <NavLink to={Path.Dogs} style={({ isActive }) => isActive ? activeLink : link}>
//           dogs
//         </NavLink>
//       </li>
//     </ul>
//   )
// }
//
// // Routing
// const Path = {
//   Dragons: "dragons",
//   Cats: "cats",
//   Dogs: "dogs",
// } as const
//
// const Routing = () => {
//   return (
//     <Routes>
//       <Route path={Path.Dragons} element={<Dragons />} />
//       <Route path={Path.Cats} element={<Cats />} />
//       <Route path={Path.Dogs} element={<Dogs />} />
//     </Routes>
//   )
// }
//
// export const App = () => {
//   return (
//     <>
//       <Menu />
//       <Routing />
//       <footer style={footer}>
//         <h2>Footer</h2>
//       </footer>
//     </>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
// )
//
// // 📜 Описание:
// // В меню 3 рабочие навигационные ссылки. Но при переходе на страницы, активная ссылка не подсвечивается.
// // Это плохое UI/UX поведение
//
// // 🪛 Задача:
// // Что нужно написать в атрибуте style для NavLink, чтобы к активной ссылке применялся стиль activeLink,
// // а к не активной, стиль link
// // ❗ Дублирование кода в данной задаче не нужно исправлять
//
// // В качестве ответа укажите код в атрибут style с измененным кодом
// // 🖥 Пример ответа: style={link || activeLink}




//
// import { createRoot } from "react-dom/client"
// import { SubmitHandler, useForm } from "react-hook-form"
//
// type Inputs = {
//   firstName: string
//   lastName: string
//   email: string
//   password: string
//   phone: string
// }
//
// const Login = () => {
//   const { register, handleSubmit } = useForm<Inputs>({
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//       phone: "",
//     },
//   })
//
//   const onSubmit: SubmitHandler<Inputs> = (data) => {
//     alert(JSON.stringify(data, null, 2))
//   }
//
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <input {...register("firstName")} placeholder={"Введите имя"} />
//       </div>
//       <div>
//         <input {...register("lastName")} placeholder={"Введите фамилию"} />
//       </div>
//       <div>
//         <input {...register("email")} placeholder={"Введите email"} type="email" />
//       </div>
//       <div>
//         <input {...register("password")} placeholder={"Введите пароль"} type="password" />
//       </div>
//       <div>
//         <input {...register("phone")} placeholder={"Введите номер телефона"} />
//       </div>
//       <button>Отправить</button>
//     </form>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(<Login />)
//
// // 📜 Описание:
// // Форма заполнения данных работает некорректно.
// // Пользователи жалуются на поле ввода "Телефона"
// // Найдите в коде ошибку. Исправленную версию всей строки напишите в качестве ответа.




// import { createRoot } from "react-dom/client"
// import { SubmitHandler, useForm } from "react-hook-form"
//
// type Inputs = {
//   email: string
//   password: string
// }
//
// const Login = () => {
//   const { register, handleSubmit } = useForm<Inputs>({
//     defaultValues: { email: "", password: "" },
//   })
//
//   const onSubmit: SubmitHandler<Inputs> = (data) => {
//     alert(JSON.stringify(data, null, 2))
//   }
//
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("email")} placeholder={"Введите email"} type="email" />
//       <input {...register("password")} placeholder={"Введите пароль"} type="password" />
//       <button type="submit">Отправить</button>
//     </form>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(<Login />)
//
// // 📜 Описание:
// // При заполнении данных формы и их отправке вы должны увидеть alert c
// // введенными значениями, но из-за допущенной ошибки форма работает не корректно.
// // Найдите ошибку и исправленную версию строки напишите в качестве ответа.
// // ❗После того как показался alert форма не должна перегружать все приложение







// import axios from "axios"
// import { createRoot } from "react-dom/client"
// import { useEffect, useState } from "react"
//
// // Types
// type Comment = {
//   postId: string
//   id: string
//   name: string
//   email: string
//   body: string
// }
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const commentsAPI = {
//   getComments() {
//     return instance.get<Comment[]>("comments")
//   },
//   createComment() {
//     const payload = {
//       body: "Это просто заглушка. Backend сам сгенерирует новый комментарий и вернет его вам",
//     }
//     // Promise.resolve() стоит в качестве заглушки, чтобы TS не ругался и код компилировался
//     // Promise.resolve() нужно удалить и написать правильный запрос для создания нового комментария
//     return instance.post<Comment[]>("comments", payload)
//   },
// }
//
// // App
// export const App = () => {
//   const [comments, setComments] = useState<Comment[]>([])
//
//   useEffect(() => {
//     commentsAPI.getComments().then((res) => {
//       setComments(res.data)
//     })
//   }, [])
//
//   const createPostHandler = () => {
//     commentsAPI.createComment().then((res: any) => {
//       const newComment = res.data
//       setComments([newComment, ...comments])
//     })
//   }
//
//   return (
//     <>
//       <h1>📝 Список комментариев</h1>
//       <div style={{ marginBottom: "15px" }}>
//         <button style={{ marginLeft: "15px" }} onClick={() => createPostHandler()}>
//           Добавить новый комментарий
//         </button>
//       </div>
//
//       {comments.map((c) => {
//         return (
//           <div key={c.id}>
//             <b>Comment</b>: {c.body}{" "}
//           </div>
//         )
//       })}
//     </>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(<App />)
//
// // 📜 Описание:
// // Напишите запрос на сервер для создания нового комментария.
// // Типизацию возвращаемых данных в ответе указывать необязательно, но можно и указать (в ответах учтены оба варианта).
// // Исправленную версию строки напишите в качестве ответа.



// import { configureStore, createSlice } from "@reduxjs/toolkit"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
//
// // slice
// const slice = createSlice({
//   name: "products",
//   initialState: [
//     { id: 1, name: "Laptop", inStock: true, price: 1500 },
//     { id: 2, name: "Smartphone", inStock: false, price: 800 },
//     { id: 3, name: "Tablet", inStock: true, price: 600 },
//   ],
//   reducers: {
//     applyDiscount: (state, action) => {
//       return state.forEach(product => {
//         product.price = product.price - (product.price * action.payload) / 100;
//       })
//     },
//   },
//   selectors: {
//     selectProducts: (state) => state,
//   },
// })
//
// const { applyDiscount } = slice.actions
// const { selectProducts } = slice.selectors
//
// // App.tsx
// const App = () => {
//   const products = useAppSelector(selectProducts)
//   const dispatch = useAppDispatch()
//
//   const handleDiscount = (discount: number) => {
//     dispatch(applyDiscount(discount))
//   }
//
//   return (
//     <div>
//       <button onClick={() => handleDiscount(10)}>10% Discount</button>
//       <button onClick={() => handleDiscount(30)}>30% Discount</button>
//       <button onClick={() => handleDiscount(50)}>50% Discount</button>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             <span>
//               {product.name} ({product.inStock ? "In Stock" : "Out of Stock"}) - ${product.price.toFixed(2)}
//             </span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }
//
// // store.ts
// const store = configureStore({
//   reducer: {
//     products: slice.reducer,
//   },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// // main.ts
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // 📜 Описание:
// // При нажатии на кнопки с 10%, 30% или 50% скидками цены всех продуктов должны уменьшиться на
// // указанный процент.
//
// // 🪛 Задача:
// // Перепишите изменение стейта так, чтобы цена каждого продукта уменьшалась на указанный процент.
// // В качестве ответа укажите исправленный код написанный вместо return state.
// // ❗Операция должна быть реализована мутабельным образом.




// import { configureStore, createSlice } from "@reduxjs/toolkit"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
//
// // slice
// const slice = createSlice({
//   name: "playlist",
//   initialState: {
//     albums: [
//       {
//         id: 1,
//         title: "Album 1",
//         songs: [
//           { id: 1, title: "Song 1-1" },
//           { id: 2, title: "Song 1-2" },
//         ],
//       },
//       {
//         id: 2,
//         title: "Album 2",
//         songs: [
//           { id: 3, title: "Song 2-1" },
//           { id: 4, title: "Song 2-2" },
//         ],
//       },
//     ],
//   },
//   reducers: {
//     removeLastSongFromAlbum: (state, action) => {
//       const album = state.albums.find(a => a.id === action.payload);
//       if (album && album.songs.length > 0) {
//         album.songs.pop();
//       }
//     },
//   },
//   selectors: {
//     selectAlbums: (state) => state.albums,
//   },
// })
//
// const { removeLastSongFromAlbum } = slice.actions
// const { selectAlbums } = slice.selectors
//
// // App.tsx
// const App = () => {
//   const albums = useAppSelector(selectAlbums)
//   const dispatch = useAppDispatch()
//
//   const removeLastSong = (albumId: number) => {
//     dispatch(removeLastSongFromAlbum(albumId))
//   }
//
//   return (
//     <>
//       {albums.map((album) => (
//         <div key={album.id}>
//           <h3>{album.title}</h3>
//           <button onClick={() => removeLastSong(album.id)}>Remove Last Song</button>
//           <ul>
//             {album.songs.map((song) => (
//               <li key={song.id}>{song.title}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </>
//   )
// }
//
// // store.ts
// const store = configureStore({
//   reducer: {
//     playlist: slice.reducer,
//   },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// // main.ts
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // 📜 Описание:
// // Плейлист разделён на альбомы, и каждая кнопка Remove Last Song должна удалять последнюю песню из соответствующего альбома.
//
// // 🪛 Задача:
// // Перепишите изменение стейта таким образом, чтобы описание выше выполнялось
// // В качестве ответа укажите исправленный код написанный вместо return state.
// // ❗Изменение стейта должно быть написано мутабельным образом.
// // ❗Не используйте деструктуризацию action.payload (const {id} = action.payload)
// // ❗Не создавайте переменные из action.payload (const id = action.payload.id)






// import { useEffect } from "react"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
// import axios from "axios"
// import { asyncThunkCreator, buildCreateSlice, configureStore } from "@reduxjs/toolkit"
//
// // Types
// type Todolist = {
//   id: string
//   title: string
//   order: number
//   createdAt: string
//   updatedAt: string
//   completed: boolean
// }
//
// type User = {
//   id: string
//   name: string
//   age: number
// }
//
// type UsersResponse = {
//   items: User[]
//   totalCount: number
// }
//
// // API
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const api = {
//   getTodos() {
//     return instance.get<Todolist[]>("todo")
//   },
//   getUsers() {
//     return instance.get<UsersResponse>("user")
//   },
// }
//
// // Slice
// const createAppSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })
//
// const slice = createAppSlice({
//   name: "app",
//   initialState: {
//     todolists: [] as Todolist[],
//     users: [] as User[],
//     error: null as string | null,
//   },
//   selectors: {
//     selectTodolists: (state) => state.todolists,
//     selectUsers: (state) => state.users,
//     selectError: (state) => state.error,
//   },
//   reducers: (create) => ({
//     setError: create.reducer<{ error: string | null }>((state, action) => {
//       state.error = action.payload.error
//     }),
//     fetchTodolists: create.asyncThunk(
//       async (_arg, { dispatch, rejectWithValue }) => {
//         try {
//           const res = await api.getTodos()
//           return { todolists: res.data }
//         } catch (error: any) {
//           handleErrors(dispatch, error.message)
//           return rejectWithValue(null)
//         }
//       },
//       {
//         fulfilled: (state, action) => {
//           state.todolists = action.payload.todolists
//         },
//       },
//     ),
//     fetchUsers: create.asyncThunk(
//       async (_arg, { dispatch, rejectWithValue }) => {
//         try {
//           const res = await api.getUsers()
//           return { users: res.data.items }
//         } catch (error: any) {
//           handleErrors(dispatch, error.message)
//           return rejectWithValue(null)
//         }
//       },
//       {
//         fulfilled: (state, action) => {
//           state.users = action.payload.users
//         },
//       },
//     ),
//   }),
// })
//
// const appReducer = slice.reducer
// const { setError, fetchTodolists, fetchUsers } = slice.actions
// const { selectTodolists, selectUsers, selectError } = slice.selectors
//
// // Utils functions
// // const handleErrors = (dispatch: Dispatch, error: string) => {
// //   dispatch(setError({ error: error }))
// // }
//
//
// const handleErrors = (dispatch: AppDispatch, error: string) => {
//   dispatch(setError({ error }));
// }
//
//
// const App = () => {
//   return (
//     <>
//       <h1>✅Todos & 🙂Users</h1>
//       <div style={{ display: "flex", justifyContent: "space-evenly" }}>
//         <Todos />
//         <Users />
//       </div>
//     </>
//   )
// }
//
// const Todos = () => {
//   const dispatch = useAppDispatch()
//   const todolists = useAppSelector(selectTodolists)
//   const error = useAppSelector(selectError)
//
//   useEffect(() => {
//     dispatch(fetchTodolists())
//   }, [])
//
//   return (
//     <div>
//       <h2>✅ Список тудулистов</h2>
//       {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
//       {todolists.map((todolist) => (
//         <div style={todolist.completed ? { color: "grey" } : {}} key={todolist.id}>
//           <input type="checkbox" checked={todolist.completed} />
//           <b>Описание</b>: {todolist.title}
//         </div>
//       ))}
//     </div>
//   )
// }
//
// const Users = () => {
//   const dispatch = useAppDispatch()
//   const users = useAppSelector(selectUsers)
//   const error = useAppSelector(selectError)
//
//   useEffect(() => {
//     dispatch(fetchUsers())
//   }, [])
//
//   return (
//     <div>
//       <h2>🙂 Список юзеров</h2>
//       {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
//       <div>
//         {users.map((user) => (
//           <div key={user.id}>
//             <b>name</b>:{user.name} - <b>age</b>:{user.age}
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
//
// // Store
// const store = configureStore({
//   reducer: {
//     [slice.name]: appReducer,
//   },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
// // 📜 Описание:
// // Откройте network и вы увидите что запросы за тудулистами и пользователями падают с ошибками,
// // но пользователе не видит ошибок, потому что утилитная функция handleErrors написана неверно.
// // Ваша задача дописать функцию handleErrors, чтобы пользователь на экране увидел ошибки:
// // 'Request failed with status code 404'
// //❗ Код фиксить не нужно.
// //❗ Тип any типизации указывать запрещено
// // В качестве ответа укажите полностью написанную функцию
//
// // Пример ответа:
// // const handleErrors = () => {
// //   console.log("error")
// // }





// import { CSSProperties } from "react"
// import { createRoot } from "react-dom/client"
// import { BrowserRouter, NavLink, Route, Routes } from "react-router"
//
// const footer: CSSProperties = {
//   padding: 10,
//   background: "lightslategrey",
// }
//
// const link: CSSProperties = {
//   color: "lightsalmon",
//   fontSize: 20,
// }
//
// const Dragons = () => {
//   return <h1>🐲 🐲 🐲</h1>
// }
//
// const Cats = () => {
//   return <h1>😺 🐱 😼</h1>
// }
//
// const Dogs = () => {
//   return <h1>🐶 🐶 🐶</h1>
// }
//
// const PageNotFound = () => {
//   return <h1>4️⃣0️⃣4️⃣</h1>
// }
//
// const Menu = () => {
//   return (
//     <ul>
//       <li>
//         <NavLink to={Path.Dragons} style={link}>
//           dragons
//         </NavLink>
//       </li>
//       <li>
//         <NavLink to={Path.Cats} style={link}>
//           cats
//         </NavLink>
//       </li>
//       <li>
//         <NavLink to={Path.Dogs} style={link}>
//           dogs
//         </NavLink>
//       </li>
//     </ul>
//   )
// }
//
// // Routing
// const Path = {
//   Dragons: "dragons",
//   Cats: "cats",
//   Dogs: "dogs",
// } as const
//
// const Routing = () => {
//   return (
//     <Routes>
//       <Route path={"/"} element={<div></div>} />
//       <Route path={Path.Dragons} element={<Dragons />} />
//       <Route path={Path.Cats} element={<Cats />} />
//       <Route path={Path.Dogs} element={<Dogs />} />
//       <Route path= "*" element={<PageNotFound />} />
//       {/*❗XXX */}
//     </Routes>
//   )
// }
//
// const App = () => {
//   return (
//     <>
//       <Menu />
//       <Routing />
//       <footer style={footer}>
//         <h2>Footer</h2>
//       </footer>
//     </>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
// )
//
// // 📜 Описание:
// // Реализуйте Page not found
//
// // 🪛 Задача:
// // Что нужно написать вместо {/*❗XXX */},
// // чтобы при url `http://localhost:3000/fsdfdsf` и других не существующих страницах
// // отработал роут Page not found









// import { useEffect } from "react"
// import { Provider, useDispatch, useSelector } from "react-redux"
// import axios from "axios"
// import { asyncThunkCreator, buildCreateSlice, configureStore } from "@reduxjs/toolkit"
// import { createRoot } from "react-dom/client"
//
// // Types
// type Todolist = {
//   id: string
//   title: string
//   order: number
//   createdAt: string
//   updatedAt: string
//   completed: boolean
// }
//
// type User = {
//   id: string
//   name: string
//   age: number
// }
//
// type UsersResponse = {
//   items: User[]
//   totalCount: number
// }
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const api = {
//   getTodos() {
//     return instance.get<Todolist[]>("todos")
//   },
//   getUsers() {
//     return instance.get<UsersResponse>("users")
//   },
// }
//
// // Slice
// const createAppSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })
//
// const slice = createAppSlice({
//   name: "app",
//   initialState: {
//     todolists: [] as Todolist[],
//     users: [] as User[],
//     error: null as string | null,
//   },
//   selectors: {
//     selectTodolists: (state) => state.todolists,
//     selectUsers: (state) => state.users,
//     selectError: (state) => state.error,
//   },
//   reducers: (create) => ({
//     setError: create.reducer<{ error: string | null }>((state, action) => {
//       state.error = action.payload.error
//     }),
//     fetchTodolists: create.asyncThunk(
//       async (_arg, { rejectWithValue }) => {
//         try {
//           // ❗AAA
//           // ❗BBB
//           const res = await api.getTodos()
//           return { todolists: res.data }
//         } catch (error) {
//           return rejectWithValue(null)
//         }
//       },
//       {
//         fulfilled: (state, action) => {
//           state.todolists = action.payload.todolists
//         },
//       },
//     ),
//     fetchUsers: create.asyncThunk(
//       async (_arg, { rejectWithValue }) => {
//         try {
//           // ❗CCC
//           // ❗DDD
//           const res = await api.getUsers()
//           return { users: res.data.items }
//         } catch (error) {
//           return rejectWithValue(null)
//         }
//       },
//       {
//         fulfilled: (state, action) => {
//           state.users = action.payload.users
//         },
//       },
//     ),
//   }),
// })
//
// const appReducer = slice.reducer
// const { fetchTodolists, fetchUsers } = slice.actions
// const { selectTodolists, selectUsers, selectError } = slice.selectors
//
// // App
// const App = () => {
//   return (
//     <>
//       <h1>✅Todos & 🙂Users</h1>
//       <div style={{ display: "flex", justifyContent: "space-evenly" }}>
//         <Todos />
//         <Users />
//       </div>
//     </>
//   )
// }
//
// const Todos = () => {
//   const dispatch = useAppDispatch()
//   const todolists = useAppSelector(selectTodolists)
//   const error = useAppSelector(selectError)
//
//   useEffect(() => {
//     dispatch(fetchTodolists())
//   }, [])
//
//   return (
//     <div>
//       <h2>✅ Список тудулистов</h2>
//       {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
//       {todolists.map((todolist) => (
//         <div style={todolist.completed ? { color: "grey" } : {}} key={todolist.id}>
//           <input type="checkbox" checked={todolist.completed} />
//           <b>Описание</b>: {todolist.title}
//         </div>
//       ))}
//     </div>
//   )
// }
//
// const Users = () => {
//   const dispatch = useAppDispatch()
//   const users = useAppSelector(selectUsers)
//   const error = useAppSelector(selectError)
//
//   useEffect(() => {
//     dispatch(fetchUsers())
//   }, [])
//
//   return (
//     <div>
//       <h2>🙂 Список юзеров</h2>
//       {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
//       <div>
//         {users.map((user) => {
//           return (
//             <div key={user.id}>
//               <b>name</b>:{user.name} - <b>age</b>:{user.age}
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }
//
// // Store
// const store = configureStore({
//   reducer: {
//     [slice.name]: appReducer,
//   },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // 📜 Описание:
// // Что нужно написать вместо // ❗AAA, ❗BBB, ❗CCC, ❗DDD для того чтобы на экране
// // отобразился список тудулистов и юзеров
// // Каждый ответ укажите на новой строке или через пробел соблюдая порядок
//
// // Пример ответа:
// // const a = 1 + 1
// // return a
// // const c = 1 + 3
// // return c









// import { configureStore, createSlice } from "@reduxjs/toolkit"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
//
// // oxygenCounter slice
// const oxygenSlice = createSlice({
//   name: "oxygenCounter",
//   initialState: {
//     percent: 21,
//   },
//   reducers: {
//     increase: (state) => {
//       state.percent += 1
//     },
//   },
//   selectors: {
//     selectPercent: (state) => state.percent,
//   },
// })
// const { increase } = oxygenSlice.actions
// const { selectPercent } = oxygenSlice.selectors
//
// // temperature slice
// const temperatureSlice = createSlice({
//   name: "temperatureCounter",
//   initialState: {
//     celsius: 20,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(increase, (state) => {
//       state.celsius += 2;
//     });
//   },
//   selectors: {
//     selectCelsius: (state) => state.celsius,
//   },
// })
//
// const { selectCelsius } = temperatureSlice.selectors
//
// // App.tsx
// const App = () => {
//   const oxygen = useAppSelector(selectPercent)
//   const temperature = useAppSelector(selectCelsius)
//   const dispatch = useAppDispatch()
//
//   return (
//     <>
//       <button onClick={() => dispatch(increase())}>Add Oxygen</button>
//       <div>Oxygen: {oxygen}%</div>
//       <hr />
//       <div>Temperature: {temperature}°C</div>
//     </>
//   )
// }
//
// // store.ts
// const store = configureStore({
//   reducer: {
//     oxygenCounter: oxygenSlice.reducer,
//     temperatureCounter: temperatureSlice.reducer,
//   },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// // main.ts
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // 📜 Описание:
// // У вас есть два счетчика: для уровня кислорода (%) и температуры (°C).
// // При нажатии на кнопку Add Oxygen увеличивается уровень кислорода.
//
// // 🪛 Задача:
// // Реализуйте следующую задачу:
// // При нажатии на кнопку Add Oxygen помимо увеличения уровня кислорода
// // реализуйте увеличении температуры на 2°C
//
// // В качестве ответа укажите добавленный вами код
// // ❗Операция должна быть реализована мутабельным образом.
// // 💡Подсказка. Используйте extraReducers







// import { createRoot } from "react-dom/client"
// import { BrowserRouter, Route, Routes, useNavigate, useParams } from "react-router"
//
// type User = {
//   id: number
//   name: string
//   avatar: string
//   age: number
//   address: string
// }
//
// const users: User[] = [
//   {
//     id: 1,
//     name: "my Name",
//     age: 32,
//     avatar: "—ฅ/ᐠ.̫ .ᐟ\\ฅ—",
//     address: "my Address",
//   },
//   {
//     id: 2,
//     name: "John",
//     age: 22,
//     avatar: ":)",
//     address: "California",
//   },
//   {
//     id: 3,
//     name: "Mike",
//     age: 18,
//     avatar: "^._.^",
//     address: "New York",
//   },
//   {
//     id: 4,
//     name: "Emma",
//     age: 38,
//     avatar: "/ᐠ-ꞈ-ᐟ\\",
//     address: "Washington",
//   },
// ]
//
// const StartPage = () => {
//   const navigate = useNavigate()
//   const friends = users.filter((u) => u.id !== 1)
//
//   const mappedFriends = friends.map((f, i) => {
//     const go = () => {
//       navigate("/friend/" + f.id)
//     }
//
//     return (
//       <div key={i} onClick={go} style={{ paddingLeft: 24, color: "blue", cursor: "pointer" }}>
//         {f.name}, {f.age}
//       </div>
//     )
//   })
//
//   return (
//     <div>
//       <h2>🙂 My profile</h2>
//       <Profile userId={1} />
//       <hr />
//       <h2>👪 Friends</h2>
//       {mappedFriends}
//     </div>
//   )
// }
//
// const Profile = ({ userId }: { userId?: number }) => {
//   const { id } = useParams<{ id: string }>()
//   const user = users.find((u) => u.id === +(id || userId || 0))
//
//   return (
//     <div>
//       <div>
//         <b>avatar</b> {user?.avatar}
//       </div>
//       <div>
//         <div>
//           <b>name</b>: {user?.name}
//         </div>
//         <div>
//           <b>age</b>: {user?.age}
//         </div>
//         <div>
//           <b>address</b>: {user?.address}
//         </div>
//       </div>
//     </div>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(
//   <BrowserRouter>
//     <Routes>
//       <Route path={"/"} element={<StartPage />} />
//       <Route path={"friend/:id"} element={<Profile />} />
//       <Route path={"*"} element={<h1>❌404 Page Not Found❌</h1>} />
//     </Routes>
//   </BrowserRouter>,
// )
//
// // 📜 Описание:
// // При загрузке приложения на экране отображается
// // профиль пользователя и список друзей.
// // Если кликнуть на пользователя, то видим ❌404 Page Not Found❌
// // Исправьте код, чтобы по клику на пользователя
// // отображалась странице с информацией о друге.
// // В качестве ответа укажите исправленную строку кода.




// import axios from "axios"
// import { createRoot } from "react-dom/client"
// import { useEffect, useState } from "react"
//
// // Types
// type Comment = {
//   postId: string
//   id: string
//   name: string
//   email: string
//   body: string
// }
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const commentsAPI = {
//   getComments() {
//     return instance.get<Comment[]>("comments")
//   },
//   createComment() {
//     const payload = {
//       body: "Это просто заглушка. Backend сам сгенерирует новый комментарий и вернет его вам",
//     }
//     return instance.post<Comment>("comments", payload)
//   },
// }
//
// // App
// export const App = () => {
//   const [comments, setComments] = useState<Comment[]>([])
//
//   useEffect(() => {
//     commentsAPI.getComments().then((res) => {
//       setComments(res.data)
//     })
//   }, [])
//
//   const createPostHandler = () => {
//     commentsAPI.createComment().then((res: any) => {
//       const newComment = res.data
//       setComments([newComment, ...comments])
//     })
//   }
//
//   return (
//     <>
//       <h1>📝 Список комментариев</h1>
//       <div style={{ marginBottom: "15px" }}>
//         <button style={{ marginLeft: "15px" }} onClick={() => createPostHandler()}>
//           Добавить новый комментарий
//         </button>
//       </div>
//
//       {comments.map((c) => {
//         return (
//           <div key={c.id}>
//             <b>Comment</b>: {c.body}{" "}
//           </div>
//         )
//       })}
//     </>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(<App />)
//
// // 📜 Описание:
// // Напишите запрос на сервер для создания нового комментария.
// // Типизацию возвращаемых данных в ответе указывать необязательно, но можно и указать (в ответах учтены оба варианта).
// // Исправленную версию строки напишите в качестве ответа.






// import { useEffect } from "react"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
// import axios from "axios"
// import { asyncThunkCreator, buildCreateSlice, configureStore } from "@reduxjs/toolkit"
// import { z } from "zod"
//
// // Types
// type Film = {
//   id: string
//   nameOriginal: string
//   description: string
//   ratingImdb: number
// }
//
// type FilmsResponse = {
//   total: number
//   messages: string[]
//   page: number
//   pageCount: number
//   data: Film[]
// }
//
// // ZOD schemas
// const filmSchema = z.object({
//   id: z.string(),
//   nameOriginal: z.string(),
//   description: z.string(),
//   ratingImdb: z.number(),
// })
//
//
// const filmsResponseSchema = z.object({
//   total: z.number().int().positive(),
//   messages: z.array(z.string()),
//   page: z.number().int().positive(),
//   pageCount: z.number().int().positive(),
//   data: filmSchema.array(),
// })
//
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const api = {
//   getFilms() {
//     return instance.get<FilmsResponse>("films")
//   },
// }
//
// // Slice
// const createAppSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })
//
// const slice = createAppSlice({
//   name: "films",
//   initialState: {
//     films: [] as Film[],
//   },
//   selectors: {
//     selectFilms: (state) => state.films,
//   },
//   reducers: (create) => ({
//     fetchFilms: create.asyncThunk(
//       async (_arg, { rejectWithValue }) => {
//         try {
//           const res = await api.getFilms()
//           filmsResponseSchema.parse(res.data) // 💎 ZOD
//           return { films: res.data.data }
//         } catch (error) {
//           if (error instanceof z.ZodError) {
//             alert("Zod error")
//             console.table(error.issues)
//           }
//           return rejectWithValue(null)
//         }
//       },
//       {
//         fulfilled: (state, action) => {
//           state.films = action.payload.films
//         },
//       },
//     ),
//   }),
// })
//
// const filmsReducer = slice.reducer
// const { fetchFilms } = slice.actions
// const { selectFilms } = slice.selectors
//
// // App
// const App = () => {
//   const dispatch = useAppDispatch()
//   const films = useAppSelector(selectFilms)
//
//   useEffect(() => {
//     dispatch(fetchFilms())
//   }, [])
//
//   return (
//     <>
//       <h2>🎦 Films</h2>
//       {films.map((film) => {
//         return (
//           <div key={film.id}>
//             <b>{film.nameOriginal}</b>
//             <p>{film.description}</p>
//             <p>⭐ {film.ratingImdb} </p>
//           </div>
//         )
//       })}
//     </>
//   )
// }
//
// // Store
// const store = configureStore({
//   reducer: {
//     [slice.name]: filmsReducer,
//   },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // ❗Убедитесь, что у вас установлена библиотека zod. В описании к экзамену предупреждение было.
// // Если нет, то установите `pnpm add zod`
//
// // При загрузке приложения падает с ошибкой (Zod error),
// // т.к. filmsResponseSchema описана неверно.
// // Ваша задача на основании типа FilmsResponse устранить все ошибки в filmsResponseSchema,
// // чтобы проверка прошла и фильмы подгрузились
// // ❗Числа (total, page, pageCount) должны проверяться, что они целые и положительные
// // ❗ Менять порядок свойств в схеме запрещено
// // ❗ Выносить дублирующиеся проверки в отдельную переменную не надо
//
// // В качестве ответа укажите filmsResponseSchema целиком
//
// // Пример ответа
// // const filmsResponseSchema = z.object({
// //   total: z.boolean(),
// //   messages: z.any(),
// //   page: z.any(),
// //   pageCount: z.any(),
// //   data: z.any(),
// // })






// import { configureStore, createSlice, current } from "@reduxjs/toolkit"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
//
// // slice
// const slice = createSlice({
//   name: "waterCounter",
//   initialState: {
//     liters: 10,
//   },
//   reducers: {
//     count: (state) => {
//       console.log(current(state))
//
//     },
//   },
//   selectors: {
//     selectLiters: (state) => state.liters,
//   },
// })
//
// const { count } = slice.actions
// const { selectLiters } = slice.selectors
//
// // App.tsx
// const App = () => {
//   const water = useAppSelector(selectLiters)
//   const dispatch = useAppDispatch()
//
//   return (
//     <>
//       <button onClick={() => dispatch(count())}>Get Water</button>
//       <span>{water} liters</span>
//     </>
//   )
// }
//
// // store.ts
// const store = configureStore({
//   reducer: {
//     waterCounter: slice.reducer,
//   },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// // main.ts
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // 📜 Описание:
// // Откройте панель разработчика и нажмите на кнопку Get Water
// // В консоли вы увидите такой результат
// // Proxy(Object) {type_: 0, scope_: {…}, modified_: false, finalized_: false, assigned_: {…},
//
// // 🪛 Задача:
// // Выведите в консоль state таким образом, чтобы получить вот такой результат {liters: 10}
// // В качестве ответа укажите исправленную строку кода.
//
// // ❗Для решения данной задачи использовать метод который предоставляет нам @reduxjs/toolkit





// import { asyncThunkCreator, buildCreateSlice, configureStore } from "@reduxjs/toolkit"
// import axios from "axios"
// import { useEffect } from "react"
// import { Provider, useDispatch, useSelector } from "react-redux"
// import { BrowserRouter, Route, Routes } from "react-router"
// import { createRoot } from "react-dom/client"
//
// // Utils
// console.log = () => {}
//
// // Api
// const instance = axios.create({
//   baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/",
// })
//
// const api = {
//   getUsers() {
//     /* 1 */
//     debugger
//     return instance.get("users")
//   },
// }
//
// // Slice
// const createAppSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })
//
// const slice = createAppSlice({
//   name: "auth",
//   initialState: {
//     isLoading: false,
//     users: [] as any[],
//   },
//   selectors: {
//     selectIsLoading: (state) => state.isLoading,
//     selectUsers: (state) => state.users,
//   },
//   reducers: (create) => ({
//     setLoading: create.reducer<{ isLoading: boolean }>((state, action) => {
//       state.isLoading = action.payload.isLoading
//     }),
//     fetchUsers: create.asyncThunk(
//       async (_arg, { dispatch, rejectWithValue }) => {
//         try {
//           dispatch(setLoading({ isLoading: true }))
//           /* 2 */
//           debugger
//           const res = await api.getUsers()
//           /* 3 */
//           debugger
//           return { users: res.data.items }
//         } catch (error) {
//           return rejectWithValue(null)
//         }
//       },
//       {
//         fulfilled: (state, action) => {
//           /* 4 */
//           debugger
//           state.users = action.payload.users
//         },
//       },
//     ),
//   }),
// })
//
// const authReducer = slice.reducer
// const { setLoading, fetchUsers } = slice.actions
// const { selectUsers } = slice.selectors
//
// // Login
// const Login = () => {
//   const users = useAppSelector(selectUsers)
//
//   /* 5 */
//   debugger
//   return (
//     <div>
//       {users.map((u) => (
//         <p key={u.id}>{u.email}</p>
//       ))}
//       <h1>
//         В данном задании на экран смотреть не нужно. Рекомендуем взять ручку, листик и последовательно, спокойно
//         расставить цифры в нужном порядке. Прежде чем давать ответ обязательно посчитайте к-во цифр и сверьте с
//         подсказкой. Удачи 🚀
//       </h1>
//     </div>
//   )
// }
//
// // App
// const App = () => {
//   /* 6 */
//   debugger
//   const dispatch = useAppDispatch()
//
//   useEffect(() => {
//     /* 7 */
//     debugger
//     dispatch(fetchUsers())
//   }, [])
//
//   /* 8 */
//   debugger
//   return (
//     <Routes>
//       <Route path={"/"} element={<Login />} />
//     </Routes>
//   )
// }
//
// // Store
// const store = configureStore({
//   reducer: {
//     [slice.name]: authReducer,
//   },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// createRoot(document.getElementById("root")!).render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </BrowserRouter>,
// )
//
// // 📜 Описание:
// // Задача: напишите в какой последовательности вызовутся числа при успешном запросе.
// // 💡 Подсказка: будет 9 чисел.
// // Ответ дайте через пробел.
//
// // 🖥 Пример ответа: 1 2 3 4 5 6 7 8 9





// import { configureStore, createSlice } from "@reduxjs/toolkit"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
//
// type Note = {
//   id: number
//   content: string
//   important: boolean
// }
//
// // slice
// const slice = createSlice({
//   name: "notes",
//   initialState: {
//     items: [
//       { id: 1, content: "Buy groceries", important: false },
//       { id: 2, content: "Schedule meeting", important: true },
//       { id: 3, content: "Call mom", important: false },
//     ],
//   },
//   reducers: {
//     updateNote: (state, action) => {
//       // return {...state, items: state.items.map(n => n.id === action.payload.id ? {...n, important: action.payload.important} : n)}
//       const note = state.items.find(n => n.id === action.payload.id)
//       if (note) {
//         note.important = action.payload.important
//       }
//     },
//   },
//   selectors: {
//     selectNotes: (state) => state.items,
//   },
// })
//
// const { updateNote } = slice.actions
// const { selectNotes } = slice.selectors
//
// // App.tsx
// const App = () => {
//   const notes = useAppSelector(selectNotes)
//   const dispatch = useAppDispatch()
//
//   const toggleImportance = (note: Note) => {
//     dispatch(updateNote({ id: note.id, important: !note.important }))
//   }
//
//   return (
//     <ul>
//       {notes.map((note) => (
//         <li key={note.id}>
//           <span
//             style={{
//               fontWeight: note.important ? "bold" : "normal",
//             }}
//           >
//             {note.content}
//           </span>
//           <button onClick={() => toggleImportance(note)}>{note.important ? "Unmark" : "Mark Important"}</button>
//         </li>
//       ))}
//     </ul>
//   )
// }
//
// // store.ts
// const store = configureStore({
//   reducer: {
//     notes: slice.reducer,
//   },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// // main.ts
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // 📜 Описание:
// // При нажатии на кнопку Mark Important или Unmark рядом с заметкой, важность заметки не обновляется 🥲
//
// // 🪛 Задача:
// // Перепишите изменение стейта таким образом, чтобы при нажатии на кнопку Mark Important или Unmark,
// // состояние важности заметки обновлялось.
// // В качестве ответа укажите исправленный код написанный вместо return state.
// // ❗Изменение стейта должно быть написано мутабельным образом
// // ❗Не используйте деструктуризацию action.payload (const {id} = action.payload)
// // ❗Не создавайте переменные из action.payload (const id = action.payload.id)





// import { configureStore, createSlice } from "@reduxjs/toolkit"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
//
// type Product = {
//   id: number
//   name: string
//   inStock: boolean
// }
//
// // slice
// const slice = createSlice({
//   name: "products",
//   initialState: [
//     { id: 1, name: "Laptop", inStock: true },
//     { id: 2, name: "Headphones", inStock: false },
//     { id: 3, name: "Smartphone", inStock: true },
//   ] as Product[],
//   reducers: {
//     toggleInStock: (state, action) => {
//       const product = state.find((product) => product.id === action.payload.id)
//       if (product) {
//         product.inStock = action.payload.inStock
//       }
//     },
//     clearStock: (state) => {
//       return []
//     },
//   },
//   selectors: {
//     selectProducts: (state) => state,
//   },
// })
//
// const { toggleInStock, clearStock } = slice.actions
// const { selectProducts } = slice.selectors
//
// // App.tsx
// const App = () => {
//   const products = useAppSelector(selectProducts)
//   const dispatch = useAppDispatch()
//
//   const handleLogout = () => {
//     dispatch(clearStock())
//   }
//
//   const toggleProductStock = (product: Product) => {
//     dispatch(toggleInStock({ id: product.id, inStock: !product.inStock }))
//   }
//
//   return (
//     <div>
//       <button onClick={handleLogout}>Logout</button>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             <span
//               style={{
//                 color: product.inStock ? "green" : "red",
//               }}
//             >
//               {product.name} ({product.inStock ? "In Stock" : "Out of Stock"})
//             </span>
//             <button onClick={() => toggleProductStock(product)}>
//               {product.inStock ? "Mark Out of Stock" : "Mark In Stock"}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }
//
// // store.ts
// const store = configureStore({
//   reducer: {
//     products: slice.reducer,
//   },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// // main.ts
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // 📜 Описание:
// // При нажатии на кнопку Logout массив товаров не очищается 🥲
//
// // 🪛 Задача:
// // Перепишите изменение стейта таким образом, чтобы при нажатии на кнопку Logout,
// // массив товаров полностью очищался.
// // В качестве ответа укажите исправленную строку кода.





// import { asyncThunkCreator, buildCreateSlice, configureStore } from "@reduxjs/toolkit"
// import axios from "axios"
// import { createRoot } from "react-dom/client"
// import { SubmitHandler, useForm } from "react-hook-form"
// import { Provider, useDispatch, useSelector } from "react-redux"
// import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router"
// import { useEffect } from "react"
//
// // Types
// type Inputs = {
//   email: string
//   password: string
// }
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const api = {
//   login(data: Inputs) {
//     return instance.post("auth/login", data)
//   },
// }
//
// // Slice
// const createAppSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })
//
// const slice = createAppSlice({
//   name: "auth",
//   initialState: {
//     isLoggedIn: false,
//     isLoading: false,
//   },
//   selectors: {
//     selectIsLoggedIn: (state) => state.isLoggedIn,
//     selectIsLoading: (state) => state.isLoading,
//   },
//   reducers: (create) => ({
//     setLoading: create.reducer<{ isLoading: boolean }>((state, action) => {
//       state.isLoading = action.payload.isLoading
//     }),
//     login: create.asyncThunk(
//       async (arg: Inputs, { dispatch, rejectWithValue }) => {
//         try {
//           dispatch(setLoading({ isLoading: true }))
//           await api.login(arg)
//           return { isLoggedIn: true }
//         } catch (error) {
//           return rejectWithValue(null)
//         }
//       },
//       {
//         fulfilled: (state, action) => {
//           alert("Вы залогинились успешно")
//           state.isLoggedIn = action.payload.isLoggedIn
//         },
//         settled: (state) => {
//           state.isLoading = false
//         },
//       },
//     ),
//   }),
// })
//
// const authReducer = slice.reducer
// const { setLoading, login } = slice.actions
// const { selectIsLoading, selectIsLoggedIn } = slice.selectors
//
// // Components
// const Loader = () => {
//   return <h1>Loading ...</h1>
// }
//
// const Profile = () => {
//   return <h2>😎 Profile</h2>
// }
//
// const Login = () => {
//   const dispatch = useAppDispatch()
//   const navigate = useNavigate()
//
//   const isLoading = useAppSelector(selectIsLoading)
//   const isLoggedIn = useAppSelector(selectIsLoggedIn)
//
//   const { register, handleSubmit } = useForm<Inputs>({
//     defaultValues: { email: "darrell@gmail.com", password: "123" },
//   })
//
//   // ❗ XXX
//   // useEffect(() => {
//   //   if (!isLoggedIn) {
//   //     navigate("/profile")
//   //   }
//   // }, [isLoggedIn, navigate])
//
//
//   if (isLoggedIn) {
//     return <Navigate to={"/profile"} />
//   }
//
//   const onSubmit: SubmitHandler<Inputs> = (data) => {
//     dispatch(login(data))
//   }
//
//   return (
//     <>
//       {isLoading && <Loader />}
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input placeholder={"Введите email"} {...register("email")} />
//         <input type={"password"} placeholder={"Введите пароль"} {...register("password")} />
//         <button type="submit">Залогиниться</button>
//       </form>
//     </>
//   )
// }
//
// // Store
// const store = configureStore({
//   reducer: {
//     [slice.name]: authReducer,
//   },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// createRoot(document.getElementById("root")!).render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <Routes>
//         <Route path={"/"} element={<Login />} />
//         <Route path={"profile"} element={<Profile />} />
//       </Routes>
//     </Provider>
//   </BrowserRouter>,
// )
//
// // 📜 Описание:
// // ❗ Email и password менять не надо. Это просто тестовые данные с которыми будет происходить
// // успешный запрос.
// // Нажмите на кнопку "Залогиниться" и вы увидели alert с успешным сообщением
//
// // Что необходимо написать вместо `❗ XXX`, чтобы
// // при успешной логинизации, редиректнуть пользователя на страницу Profile.
// // ❗ В консоли не должно быть ошибок




// import { createRoot } from "react-dom/client"
// import { SubmitHandler, useForm } from "react-hook-form"
// import { z } from "zod"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { CSSProperties } from "react"
//
// // Styles
// const error: CSSProperties = {
//   color: "red",
// }
//
// // Schema
// const loginSchema = z.object({
//   username: z.string()
//   // ❗AAA // Username is required
//   // ❗BBB // Username must be at least 3 characters
//   // ❗CCC // Username must contain at most 20 characters
//   // ❗DDD // Only latin letters allowed
//   .min(1, 'Username is required')
//     .min(3, 'Username must be at least 3 characters')
//     .max(20, 'Username must contain at most 20 characters')
//     .regex(/^[a-zA-Z]+$/, 'Only latin letters allowed'),
//   email: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email format" }),
//   password: z.string().min(1, { message: "Password is required" }),
//   phone: z.string().regex(/^\+?[0-9]{10,15}$/, { message: "Invalid phone number" }),
// })
//
// type LoginFormValues = z.infer<typeof loginSchema>
//
// // Components
// const Login = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<LoginFormValues>({
//     resolver: zodResolver(loginSchema),
//   })
//
//   const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
//     console.log(data)
//   }
//
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* Username */}
//       <div>
//         <label>Username</label>
//         <input {...register("username")} />
//         {errors.username && <span style={error}>{errors.username.message}</span>}
//       </div>
//
//       {/* Email */}
//       <div>
//         <label>Email</label>
//         <input {...register("email")} />
//         {errors.email && <span style={error}>{errors.email.message}</span>}
//       </div>
//
//       {/* Password */}
//       <div>
//         <label>Password</label>
//         <input type="password" {...register("password")} />
//         {errors.password && <span style={error}>{errors.password.message}</span>}
//       </div>
//
//       {/* Phone */}
//       <div>
//         <label>Phone (optional)</label>
//         <input {...register("phone")} placeholder="+1234567890" />
//         {errors.phone && <span style={error}>{errors.phone.message}</span>}
//       </div>
//
//       <button type="submit">Login</button>
//     </form>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(<Login />)
//
// // Что необходимо написать вместо ❗AAA, ❗BBB, ❗CCC, ❗DDD
// // для того, чтобы валидировать Username согласно условиям написанным в схеме
//
// // Пример ответа
// //   .min(1, { message: "Username is required" })
// //   .min(2, { message: "Username must be at least 3 characters" })
// //   .min(3, { message: "Username must contain at most 20 characters" })
// //   .min(4, { message: "Only latin letters allowed" }),



// import { configureStore } from "@reduxjs/toolkit"
// import { BaseQueryArg, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { createRoot } from "react-dom/client"
// import { Provider } from "react-redux"
//
// type Comment = {
//   postId: string
//   id: string
//   name: string
//   email: string
//   body: string
// }
//
// // Api
// const api = createApi({
//   reducerPath: "commentsApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" }),
//   endpoints: (builder) => {
//     return {
//       // ❗❗❗XXX❗❗❗
//       getComments: builder.query<Comment[], void>({
//         query: () => 'comments',
//       }),
//     }
//   },
// })
//
// const { useGetCommentsQuery } = api
//
// // App.tsx
// const App = () => {
//   const { data } = useGetCommentsQuery()
//
//   return (
//     <>
//       {data?.map((el) => {
//         return (
//           <div key={el.id} style={{ border: "1px solid", margin: "5px", padding: "5px" }}>
//             <p>body - {el.body}</p>
//           </div>
//         )
//       })}
//     </>
//   )
// }
//
// // store.ts
// const store = configureStore({
//   reducer: {
//     [api.reducerPath]: api.reducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
// })
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // 📜 Описание:
// // Белый экран. Откройте панель разработчика и проанализируйте в чем ошибка
//
// // 🪛 Задача:
// // Что нужно написать вместо  `// ❗❗❗XXX❗❗❗` чтобы на экране отобразились комментарии
// // В качестве ответа укажите написанный вами код
// // ❗Типизацию указывать обязательно




// import { createRoot } from "react-dom/client"
//
// export const App = () => {
//   return (
//     <h2>
//       Какая команда позволяет на время «сдать в архив» (или отложить) изменения, сделанные в рабочей копии, чтобы вы
//       могли применить их позже? Откладывание изменений полезно, если вам необходимо переключить контекст и вы пока не
//       готовы к созданию коммита.
//     </h2>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(<App />)
//
// // 📜 Описание:
// // Какая команда позволяет на время «сдать в архив» (или отложить) изменения, сделанные в рабочей
// // копии, чтобы вы могли применить их позже? Откладывание изменений полезно, если вам необходимо переключить
// // контекст и вы пока не готовы к созданию коммита.
//
// // 🖥 Пример ответа: git init





// import { configureStore } from "@reduxjs/toolkit"
// import { BaseQueryArg, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { createRoot } from "react-dom/client"
// import { Provider } from "react-redux"
//
// type Post = {
//   body: string
//   id: string
//   title: string
//   userId: string
// }
//
// // Api
// const api = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" }),
//   endpoints: (builder) => {
//     return {
//       getPosts: builder.query<Post[], void>({
//         query: () => "posts",
//       }),
//       // ❗❗❗XXX❗❗❗
//       removePost: builder.mutation<Post, string>({
//         query: (id) => ({
//           url: `posts/${id}`,
//           method: "DELETE",
//         })
//       }),
//     }
//   },
// })
//
// const { useGetPostsQuery, useRemovePostMutation } = api
//
// // App.tsx
// const App = () => {
//   const { data } = useGetPostsQuery()
//   const [removePost] = useRemovePostMutation()
//
//   const removePostHandler = (id: string) => {
//     removePost(id)
//   }
//
//   return (
//     <>
//       {data?.map((el) => {
//         return (
//           <div key={el.id} style={{ display: "flex", alignItems: "center" }}>
//             <div style={{ border: "1px solid", margin: "5px", padding: "5px", width: "200px" }}>
//               <p>
//                 <b>title</b> - {el.title}
//               </p>
//             </div>
//             <button onClick={() => removePostHandler(el.id)}>x</button>
//           </div>
//         )
//       })}
//     </>
//   )
// }
//
// // store.ts
// const store = configureStore({
//   reducer: { [api.reducerPath]: api.reducer },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
// })
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // 📜 Описание:
// // Приложение падает с ошибкой.
//
// // 🪛 Задача:
// // Что нужно написать вместо `// ❗❗❗XXX❗❗❗` чтобы на при нажатии на кнопку `x` пост удалился.
// // В качестве ответа укажите написанный вами код
// // ❗Автоматическое получение данных реализовывать не надо
// // ❗Типизацию указывать обязательно



// import { createRoot } from "react-dom/client"
//
// export const App = () => {
//   return (
//     <div>
//       <h2>Чем отличается master от origin master ?</h2>
//       <ul>
//         <li>1 - Это просто 2 ветки с разными названиями. Их ничего не связывает</li>
//         <li>2 - master принадлежит локальному репозиторию, origin master - удаленному</li>
//         <li>3 - Это 2 названия одной и той же ветки. Приставка origin не несет никакого смысла.</li>
//         <li>4 - Ветки origin master не существует</li>
//         <li>5 - Нет правильного ответа</li>
//       </ul>
//     </div>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(<App />)
//
// // 📜 Описание:
// // Чем отличается master от origin master ?
// // Может быть несколько вариантов ответа (ответ дайте через пробел).
// // ❗ Ответ будет засчитан как верный, только при полном правильном совпадении.
// // Если указали правильно один вариант (1),
// // а нужно было указать два варианта (1 и 2), то ответ в данном случае будет засчитан как неправильный
//
// // 🖥 Пример ответа: 1





// import { configureStore } from "@reduxjs/toolkit";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { createRoot } from "react-dom/client";
// import { Provider } from "react-redux";
//
// type Photo = {
//   albumId: string;
//   id: string;
//   title: string;
//   url: string;
// };
//
// // Api
// const api = createApi({
//   reducerPath: "api",
//   tagTypes: ["Photos"],
//   baseQuery: fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" }),
//   endpoints: (builder) => {
//     return {
//       getPhotos: builder.query<Photo[], void>({
//         query: () => "photos",
//         providesTags: ["Photos"],
//       }),
//       updatePhoto: builder.mutation<Photo, { id: string; title: string }>({
//         query: ({ id, title }) => {
//           return {
//             method: "PUT",
//             url: `photos/${id}`,
//             body: { title },
//           };
//         },
//         invalidatesTags: ["Photos"],
//       }),
//     };
//   },
// });
//
// const { useGetPhotosQuery, useUpdatePhotoMutation } = api;
//
// // App.tsx
// const App = () => {
//   const { data } = useGetPhotosQuery();
//   const [trigger] = useUpdatePhotoMutation();
//
//   const updatePhotoTitleHandler = (id: string) => {
//     trigger({ id, title: "Тестовое сообщение" });
//   };
//
//   return (
//     <>
//       {data?.map((el) => {
//         return (
//           <div key={el.id} style={{ margin: "15px" }}>
//             <b>title</b> - {el.title}
//             <button onClick={() => updatePhotoTitleHandler(el.id)}>Update title</button>
//           </div>
//         );
//       })}
//     </>
//   );
// };
//
// // store.ts
// const store = configureStore({
//   reducer: { [api.reducerPath]: api.reducer },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
// });
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// );
//
// // 📜 Описание:
// // Нажмите на кнопку Update title и обновите страницу. После обновления страницы title
// // изменится, но хотелось бы не перегружать страницу
//
// // 🪛 Задача:
// // Реализуйте автоматический re-fetching используя теги. Т.е. чтобы после нажатия на кнопку Update title, title обновился без ручной перезагрузки страницы
// // обновился без ручной перезагрузки страницы
//
// // 💡 Подсказка: необходимо дописать 3 строки кода
// // В ответе укажите добавленные строки кода через пробел
// // ❗Запятую в конце строки указывать обязательно
//
// // 🖥 Пример ответа: xxx: {id: 1}, yyy: {id: 2}, zzz: {id: 3}




// import { configureStore } from "@reduxjs/toolkit"
// import { BaseQueryMeta, BaseQueryResult, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { createRoot } from "react-dom/client"
// import { Provider } from "react-redux"
//
// type Product = {
//   id: string
//   title: string
//   description: string
//   price: number
// }
//
// export type Response = {
//   total: number
//   messages: string[]
//   page: number
//   pageCount: number
//   data: Product[]
// }
//
// // Api
// const productsApi = createApi({
//   reducerPath: "productsApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" }),
//   endpoints: (builder) => {
//     return {
//       getProducts: builder.query<Product[], void>({
//         query: () => {
//           return {
//             method: "GET",
//             url: "products",
//           }
//         },
//         // ❗❗❗XXX❗❗❗
//         transformResponse: (response: Response) => response.data,
//       }),
//     }
//   },
// })
//
// const { useGetProductsQuery } = productsApi
//
// // App.tsx
// const App = () => {
//   const { data: products } = useGetProductsQuery()
//
//   return (
//     <>
//       {products?.map((el) => {
//         return (
//           <div key={el.id} style={{ border: "1px solid", margin: "5px", padding: "5px" }}>
//             <p>title - {el.title}</p>
//             <p>description - {el.description}</p>
//           </div>
//         )
//       })}
//     </>
//   )
// }
//
// // store.ts
// const store = configureStore({
//   reducer: {
//     [productsApi.reducerPath]: productsApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
// })
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // 📜 Описание:
// // Белый экран. Откройте панель разработчика и проанализируйте в чем ошибка
//
// // 🪛 Задача:
// // Что нужно написать вместо  `// ❗❗❗XXX❗❗❗` чтобы на экране отобразились продукты
// // В качестве ответа укажите написанный вами код
// // ❗Типизацию указывать обязательно
// // ❗Ответ принимает синтаксис стрелочной функции





// ❗❗❗НЕПРАВИЛЬНО
// import { configureStore } from "@reduxjs/toolkit"
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { createRoot } from "react-dom/client"
// import { Provider } from "react-redux"
//
// type Comment = {
//   postId: string
//   id: string
//   name: string
//   email: string
//   body: string
// }
//
// // Api
// const api = createApi({
//   reducerPath: "commentsApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" }),
//   endpoints: (builder) => {
//     return {
//       getComments: builder.query<Comment[], void>({
//         query: () => "comments",
//       }),
//       // ❗❗❗XXX❗❗❗
//       addComment: builder.mutation<Comment[], string>({
//         query: (title) => ({
//           url: "comments",
//           method: "POST",
//           body: title,
//         }),
//       })
//     }
//   },
// })
//
// const { useGetCommentsQuery, useAddCommentMutation } = api
//
// // App.tsx
// const App = () => {
//   const { data } = useGetCommentsQuery()
//   const [addComment] = useAddCommentMutation()
//
//   const addCommentHandler = () => {
//     addComment("Тестовая строка. Ее менять не нужно")
//   }
//
//   return (
//     <>
//       <button onClick={addCommentHandler}>Add comment</button>
//       {data?.map((el) => {
//         return (
//           <div key={el.id} style={{ border: "1px solid", margin: "5px", padding: "5px" }}>
//             <p>body - {el.body}</p>
//           </div>
//         )
//       })}
//     </>
//   )
// }
//
// // store.ts
// const store = configureStore({
//   reducer: {
//     [api.reducerPath]: api.reducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
// })
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // 📜 Описание:
// // Белый экран. Откройте панель разработчика и проанализируйте в чем ошибка
//
// // 🪛 Задача:
// // Что нужно написать вместо `// ❗❗❗XXX❗❗❗` чтобы при нажатии на кнопку `Add comment`
// // новый комментарий добавлялся и был виден в конце массива после перезагрузки страница
// // ❗ Автоматическое получение данных реализовывать не надо
// // В качестве ответа укажите написанный вами код
// // ❗Типизацию указывать обязательно






// import { configureStore } from "@reduxjs/toolkit"
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { createRoot } from "react-dom/client"
// import { Provider } from "react-redux"
//
// type Photo = {
//   albumId: string
//   id: string
//   title: string
//   url: string
// }
//
// // Api
// const api = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" }),
//   endpoints: (builder) => {
//     return {
//       getPhotos: builder.query<Photo[], void>({
//         query: () => "photos",
//       }),
//     }
//   },
// })
//
// const { useGetPhotosQuery, useLazyGetPhotosQuery } = api
//
// // App.tsx
// const App = () => {
//   // ❗❗❗XXX❗❗❗
//   const [trigger, { data }] = useLazyGetPhotosQuery()
//
//   const getPhotosHandler = () => {
//     trigger()
//   }
//
//   return (
//     <>
//       <button onClick={getPhotosHandler}>Get photos</button>
//       {data?.map((el) => {
//         return (
//           <div key={el.id} style={{ border: "1px solid", margin: "5px", padding: "5px" }}>
//             <div>
//               <b>title</b> - {el.title}
//             </div>
//           </div>
//         )
//       })}
//     </>
//   )
// }
//
// // store.ts
// const store = configureStore({
//   reducer: { [api.reducerPath]: api.reducer },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
// })
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // 📜 Описание:
// // Приложение падает с ошибкой
//
// // 🪛 Задача:
// // Почините приложение.
// // Что нужно написать вместо `// ❗❗❗XXX❗❗❗` чтобы при нажатии на кнопку `Get photos`
// // отобразились данные пришедшие с сервера
// // В качестве ответа укажите написанный вами код







// import { configureStore, nanoid } from "@reduxjs/toolkit"
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { createRoot } from "react-dom/client"
// import { Provider } from "react-redux"
//
// type Post = {
//   body: string
//   id: string
//   title: string
//   userId: string
// }
//
// const api = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" }),
//   tagTypes: ["Post"],
//   endpoints: (builder) => {
//     return {
//       getPosts: builder.query<Post[], void>({
//         query: () => "posts",
//         providesTags: ["Post"],
//       }),
//       removePost: builder.mutation<{ message: string }, string>({
//         query: (id) => ({
//           method: "DELETE",
//           url: `posts/${id}`,
//         }),
//         invalidatesTags: ["Post"],
//       }),
//     }
//   },
// })
//
// const { useGetPostsQuery, useRemovePostMutation } = api
//
// // App.tsx
// const App = () => {
//   const { data: posts } = useGetPostsQuery()
//   const [removePost] = useRemovePostMutation()
//
//   const removePostHandler = (id: string) => {
//     removePost(nanoid())
//       .unwrap()
//       .then(() => {
//         alert(`✅ The post was successfully deleted`)
//       })
//       .catch((err) => {
//         alert(`❌ The post was not deleted: ${err.data.errors}`)
//       })
//   }
//
//   return (
//     <>
//       {posts?.map((el) => {
//         return (
//           <div key={el.id} style={{ display: "flex", alignItems: "center" }}>
//             <div style={{ border: "1px solid", margin: "5px", padding: "5px", width: "200px" }}>
//               <p>
//                 <b>title</b> - {el.title}
//               </p>
//             </div>
//             <button onClick={() => removePostHandler(el.id)}>x</button>
//           </div>
//         )
//       })}
//     </>
//   )
// }
//
// // store.ts
// const store = configureStore({
//   reducer: { [api.reducerPath]: api.reducer },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
// })
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // 📜 Описание:
// // При нажатии на кнопку удаления поста (х), вы увидите alert с сообщением о том, что пост успешно
// // удален.
// // Но на самом деле падает ошибка. Откройте панель разработчика и посмотрите network.
// // Запрос падает с 400 ошибкой
//
// // 🪛 Задача:
// // Что нужно дописать в коде, чтобы в случае ошибки отработал catch и пользователь увидел
// // сообщение об ошибке.
// // В качестве ответа укажите добавленный вами код
// // ❗Чинить удаление поста не нужно






// import { configureStore, createSlice } from "@reduxjs/toolkit"
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { createRoot } from "react-dom/client"
// import { Provider, useSelector } from "react-redux"
//
// // App slice
// type NotificationLevel = "loading" | "none" | "success" | "error"
//
// const appSlice = createSlice({
//   name: "app",
//   initialState: {
//     notification: "none" as NotificationLevel,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addMatcher(api.endpoints.getPhotos.matchPending, (state) => {
//         state.notification = "loading"
//       })
//       .addMatcher(api.endpoints.getPhotos.matchFulfilled, (state) => {
//         state.notification = "success"
//       })
//       .addMatcher(api.endpoints.getPhotos.matchRejected, (state) => {
//         state.notification = "error"
//       })
//   },
//   selectors: {
//     selectNotification: (slice) => slice.notification,
//   },
// })
//
// const { selectNotification } = appSlice.selectors
//
// // Api
// type Photo = {
//   albumId: string
//   id: string
//   title: string
//   url: string
// }
//
// const api = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" }),
//   endpoints: (builder) => ({
//     getPhotos: builder.query<Photo[], void>({
//       query: () => "photos?delay=2",
//     }),
//   }),
// })
//
// const { useGetPhotosQuery } = api
//
// // App.tsx
// const App = () => {
//   const notification = useAppSelector(selectNotification)
//
//   const { data } = useGetPhotosQuery()
//
//   return (
//     <>
//       {notification === "loading" && <b style={{ fontSize: "36px" }}>🕝Загрузка...</b>}
//       {notification === "success" && <b style={{ fontSize: "36px" }}>✅ Успех</b>}
//       {notification === "error" && <b style={{ fontSize: "36px" }}>❌ Ошибка</b>}
//       {data?.map((el) => {
//         return (
//           <div key={el.id} style={{ margin: "5px", padding: "5px", width: "200px" }}>
//             <b>title</b> - {el.title}
//             <img src={el.url} alt={`${el.title} image`} />
//           </div>
//         )
//       })}
//     </>
//   )
// }
//
// // store.ts
// const store = configureStore({
//   reducer: {
//     [appSlice.name]: appSlice.reducer,
//     [api.reducerPath]: api.reducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
// })
//
// type RootState = ReturnType<typeof store.getState>
// const useAppSelector = useSelector.withTypes<RootState>()
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // 📜 Описание:
// // При загрузке приложения пользователь видит пустой экран и только спустя 2 секунды видит информацию.
//
// // 🪛 Задача:
// // Что нужно написать вместо `// ❗❗❗XXX❗❗❗` для того, чтобы при загрузке приложения
// // пользователь увидел `🕝Загрузка...`, в случае успешной загрузки увидел `✅ Успех`, а в случае
// // ошибки `❌ Ошибка`
//
// // 💡 Подсказка: для решения задачи используйте addMatcher
// // // ❗Порядок обработки нотификаций: загрука, успех, ошибка








// import { configureStore } from "@reduxjs/toolkit"
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch } from "react-redux"
//
// type User = {
//   id: string
//   name: string
//   age: number
// }
//
// type UsersResponse = {
//   items: User[]
//   totalCount: number
// }
//
// // Api
// const api = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" }),
//   endpoints: (builder) => {
//     return {
//       getUsers: builder.query<UsersResponse, void>({
//         query: () => "users",
//       }),
//     }
//   },
// })
//
// const { useGetUsersQuery } = api
//
// // Users.tsx
// const Users = () => {
//   const { data } = useGetUsersQuery()
//
//   const dispatch = useAppDispatch()
//
//   const addSmileHandler = (id: string) => {
//     const smile = "😁"
//     // ❗❗❗XXX❗❗❗
//     dispatch(
//       api.util.updateQueryData('getUsers', undefined, (state) => {
//         const user = state.items.find(user => user.id === id)
//         if (user) {
//           user.name += smile
//         }
//       })
//     )
//   }
//
//   return (
//     <>
//       <h1>Users</h1>
//       {data?.items.map((el) => (
//         <div key={el.id}>
//           name - <b>{el.name}</b>
//           <button onClick={() => addSmileHandler(el.id)}>Add smile</button>
//         </div>
//       ))}
//     </>
//   )
// }
//
// // store.ts
// const store = configureStore({
//   reducer: { [api.reducerPath]: api.reducer },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
// })
//
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <Users />
//   </Provider>,
// )
//
// // 📜 Описание:
// // Откройте redux devtools и убедитесь, что данные из запроса хранятся в кеше
// // http://surl.li/veofpd
// // 🪛 Задача:
// // При нажатии на кнопку `Add smile` необходимо изменить данные в кеше и добавить к имени переменную
// // smile
// // Результат: http://surl.li/kgmhtn
// // Что нужно написать вместо `// ❗❗❗XXX❗❗❗`, чтобы реализовать данную задачу
// // ❗Изменение стейта должно быть написано мутабельным образом
// // ❗updateRecipe коллбек в качетстве аргумента принимает стейт. Назовите эту переменную state







// import { createRoot } from "react-dom/client"
//
// export const App = () => {
//   return (
//     <div>
//       <h2>Сколько всего веток может быть в репозитории ?</h2>
//       <ul>
//         <li>1 - 2 ветки. master(main) и develop</li>
//         <li>2 - Число веток согласовывается в команде разработчиков и устанавливается в git config</li>
//         <li>
//           3 - Всегда есть ветка master (main), develop может быть по соглашения команды разработчиков. Под каждую фичу
//           создается новая ветка. При этом от ветки с фичей запрещено создавать новые ветки
//         </li>
//         <li>4 - Нет правильного ответа</li>
//       </ul>
//     </div>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(<App />)
//
// // 📜 Описание:
// // Сколько всего веток может быть в репозитории ?
// // Может быть несколько вариантов ответа (ответ дайте через пробел).
// // ❗ Ответ будет засчитан как верный, только при полном правильном совпадении.
// // Если указали правильно один вариант (1),
// // а нужно было указать два варианта (1 и 2), то ответ в данном случае будет засчитан как неправильный
//
// // 🖥 Пример ответа: 1







// import { configureStore } from "@reduxjs/toolkit"
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch } from "react-redux"
// import { BrowserRouter, NavLink, Route, Routes, useNavigate } from "react-router"
//
// type Product = {
//   id: string
//   title: string
//   description: string
//   price: number
// }
//
// type ProductsResponse = {
//   total: number
//   messages: string[]
//   page: number
//   pageCount: number
//   data: Product[]
// }
//
// type Film = {
//   id: number
//   nameOriginal: string
//   description: string
//   ratingImdb: number
// }
//
// type FilmsResponse = {
//   total: number
//   messages: string[]
//   page: number
//   pageCount: number
//   data: Film[]
// }
//
// // Api
// const api = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" }),
//   endpoints: (builder) => {
//     return {
//       getFilms: builder.query<FilmsResponse, void>({
//         query: () => "films",
//       }),
//       getProducts: builder.query<ProductsResponse, void>({
//         query: () => "products",
//       }),
//     }
//   },
// })
//
// const { useGetFilmsQuery, useGetProductsQuery } = api
//
// // Films.tsx
// const Films = () => {
//   const { data } = useGetFilmsQuery()
//
//   return (
//     <>
//       <h1>Films</h1>
//       {data?.data.map((el) => (
//         <div key={el.id} style={{ margin: "15px" }}>
//           movie title - <b>{el.nameOriginal}</b>
//         </div>
//       ))}
//     </>
//   )
// }
//
// const Products = () => {
//   const { data } = useGetProductsQuery()
//
//   return (
//     <>
//       <h1>Products</h1>
//       {data?.data.map((el) => (
//         <div key={el.id} style={{ margin: "15px" }}>
//           title - <b>{el.title}</b>
//         </div>
//       ))}
//     </>
//   )
// }
//
// export const App = () => {
//   const navigate = useNavigate()
//
//   const dispatch = useDispatch()
//
//   const leaveSiteHandler = () => {
//     navigate("/")
//     // ❗❗❗XXX❗❗❗
//     dispatch(api.util.resetApiState())
//   }
//
//   return (
//     <>
//       <header style={{ display: "flex", alignItems: "center", gap: "10px", border: "1px solid" }}>
//         <ul>
//           Menu:
//           <li>
//             <NavLink to={"films"}>Films</NavLink>
//           </li>
//           <li>
//             <NavLink to={"products"}>Products</NavLink>
//           </li>
//         </ul>
//         <button onClick={leaveSiteHandler}>Leave the site</button>
//       </header>
//
//       <Routes>
//         <Route path={"/"} element={<h1>Home page</h1>} />
//         <Route path={"/films"} element={<Films />} />
//         <Route path={"/products"} element={<Products />} />
//       </Routes>
//     </>
//   )
// }
//
// // store.ts
// const store = configureStore({
//   reducer: { [api.reducerPath]: api.reducer },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
// })
//
// createRoot(document.getElementById("root")!).render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </BrowserRouter>,
// )
//
// // 📜 Описание:
// // Перейди на страницу фильмов и убедись, что фильмы подгрузились
// // Перейди на страницу продуктов и убедись, что продукты подгрузились
// // Открой redux devtools и убедись, что фильмы и продукты сохранились в кеше
//
// // 🪛 Задача:
// // При нажатии на кнопку `Leave the site` необходимо очисть весь RTK query кеш
// // Что нужно написать вместо `// ❗❗❗XXX❗❗❗`, чтобы реализовать данную задачу






//❗X
// import { configureStore, createSlice } from "@reduxjs/toolkit"
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { useEffect } from "react"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
//
// // Slice
// const appSlice = createSlice({
//   name: "app",
//   initialState: {
//     error: null as string | null,
//   },
//   reducers: (create) => ({
//     setError: create.reducer<{ error: string | null }>((state, action) => {
//       state.error = action.payload.error
//     }),
//   }),
//   selectors: {
//     selectError: (state) => state.error,
//   },
// })
//
// const { selectError } = appSlice.selectors
// const { setError } = appSlice.actions
//
// // Api
// type Post = {
//   body: string
//   id: string
//   title: string
//   userId: string
// }
//
// type Error = {
//   errors: { field: string; message: string }[]
// }
//
// const api = createApi({
//   reducerPath: "api",
//   baseQuery: async (args, api, extraOptions) => {
//     const result = await fetchBaseQuery({
//       baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/",
//     })(args, api, extraOptions)
//
//     if (result.error) {
//       if (result.error.status === 400) {
//         const error = (result.error.data as Error).errors.map(e => e.message).join(', ')
//         api.dispatch(setError({ error }))
//       }
//     }
//     return result
//   },
//   tagTypes: ["Post"],
//   endpoints: (builder) => ({
//     getPosts: builder.query<Post[], void>({
//       query: () => "posts",
//       providesTags: ["Post"],
//     }),
//     removePost: builder.mutation<{ message: string }, string>({
//       query: (id) => ({
//         method: "DELETE",
//         url: `posts/${id}?delay=20`,
//       }),
//       invalidatesTags: ["Post"],
//     }),
//   }),
// })
//
// const { useGetPostsQuery, useRemovePostMutation } = api
//
// // UI
// const Header = () => <div style={{ width: "100%", background: "gray", border: "none", height: "50px" }}>header</div>
//
// const LinearProgress = () => (
//   <hr
//     style={{
//       height: "10px",
//       width: "100%",
//       background: "lightblue",
//       border: "none",
//       position: "absolute",
//       left: "0px",
//       top: "50px",
//       right: "0px",
//     }}
//   />
// )
//
// const App = () => {
//   const error = useSelector(selectError)
//
//   const dispatch = useDispatch()
//
//   useEffect(() => {
//     setTimeout(() => {
//       dispatch(setError({ error: null }))
//     }, 4000)
//   }, [error])
//
//   return (
//     <>
//       <Header />
//       {error && <h1 style={{ color: "red" }}>{error}</h1>}
//       <Posts />
//     </>
//   )
// }
//
// const Posts = () => {
//   const { data, isSuccess, isLoading: isPostsLoading } = useGetPostsQuery()
//   const [removePost, { isLoading: isRemovePostLoading }] = useRemovePostMutation()
//
//   const deletePostHandler = (id: string) => {
//     removePost(id)
//   }
//
//   if (isPostsLoading || isRemovePostLoading) {
//     return <LinearProgress />
//   }
//
//   return (
//     <>
//       {isSuccess && (
//         <>
//           <h2>Posts</h2>
//           {data?.map((el) => {
//             return (
//               <div key={el.id} style={{ display: "flex", alignItems: "center" }}>
//                 <div style={{ border: "1px solid", margin: "5px", padding: "5px", width: "200px" }}>
//                   <p>
//                     <b>title</b> - {el.title}
//                   </p>
//                 </div>
//                 <button onClick={() => deletePostHandler(el.id)}>Delete post</button>
//               </div>
//             )
//           })}
//         </>
//       )}
//     </>
//   )
// }
//
// // Store
// const store = configureStore({
//   reducer: {
//     [appSlice.name]: appSlice.reducer,
//     [api.reducerPath]: api.reducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
// })
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // 📜 Описание:
// // Нажмите на кнопку удаления поста. Пост не удалится.
//
// // 🪛 Задача:
// // Ваша задача состоит в том, что разобраться почему пост не удаляется и вывести сообщение
// // об ошибке на экран.
// // Что нужно написать вместо "❗X" для того, чтобы при удалении поста он увидел ошибку
// // ❗ Для типизации ошибки используйте type assertion с типом Error



//❗X
// import { configureStore, createSlice, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit"
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { createRoot } from "react-dom/client"
// import { Provider, useSelector } from "react-redux"
//
// // Slice
// type RequestStatus = "idle" | "loading" | "succeeded" | "failed"
//
// const appSlice = createSlice({
//   name: "app",
//   initialState: {
//     status: "idle" as RequestStatus,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addMatcher(isPending, (state, action) => {
//         // "❗X"
//         if (action.type.includes('/executeMutation/')) {
//           state.status = "loading"
//         }
//       })
//       .addMatcher(isFulfilled, (state) => {
//         state.status = "succeeded"
//       })
//       .addMatcher(isRejected, (state) => {
//         state.status = "failed"
//       })
//   },
//   selectors: {
//     selectStatus: (state) => state.status,
//   },
// })
//
// const { selectStatus } = appSlice.selectors
//
// type Post = {
//   body: string
//   id: string
//   title: string
//   userId: string
// }
//
// // Api
// const api = createApi({
//   reducerPath: "api",
//   baseQuery: async (args, api, extraOptions) => {
//     await new Promise((resolve) => setTimeout(resolve, 2000)) // Эмуляция задержки
//
//     return fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" })(args, api, extraOptions)
//   },
//   tagTypes: ["Post"],
//   endpoints: (builder) => {
//     return {
//       getPosts: builder.query<Post[], void>({
//         query: () => "posts",
//         providesTags: ["Post"],
//       }),
//       updatePost: builder.mutation<Post, { id: string; payload: { title: string; body: string } }>({
//         query: ({ id, payload }) => ({
//           method: "PUT",
//           url: `posts/${id}`,
//           body: payload,
//         }),
//         invalidatesTags: ["Post"],
//       }),
//       removePost: builder.mutation<{ message: string }, string>({
//         query: (id) => ({
//           method: "DELETE",
//           url: `posts/${id}`,
//         }),
//         invalidatesTags: ["Post"],
//       }),
//     }
//   },
// })
//
// const { useGetPostsQuery, useUpdatePostMutation, useRemovePostMutation } = api
//
// // Components
// const Header = () => <div style={{ width: "100%", background: "gray", border: "none", height: "50px" }}>header</div>
//
// const LinearProgress = () => (
//   <hr
//     style={{
//       height: "10px",
//       width: "100%",
//       background: "lightblue",
//       border: "none",
//       position: "absolute",
//       left: "0px",
//       top: "50px",
//       right: "0px",
//     }}
//   />
// )
//
// const App = () => {
//   const status = useSelector(selectStatus)
//
//   return (
//     <div>
//       <Header />
//       {status === "loading" && <LinearProgress />}
//       <Posts />
//     </div>
//   )
// }
//
// const Posts = () => {
//   const { data, isSuccess, isLoading } = useGetPostsQuery()
//   const [updatePost] = useUpdatePostMutation()
//   const [removePost] = useRemovePostMutation()
//
//   const updatePostHandler = (id: string) => {
//     updatePost({ id, payload: { title: "Тестовый title", body: "Тестовое body сообщение" } })
//   }
//
//   const deletePostHandler = (id: string) => {
//     removePost(id)
//   }
//
//   if (isLoading) {
//     return <h2>Posts loading...</h2>
//   }
//
//   return (
//     <div>
//       {isSuccess && (
//         <div>
//           <h2>Posts</h2>
//           {data?.map((el) => {
//             return (
//               <div key={el.id} style={{ display: "flex", alignItems: "center" }}>
//                 <div style={{ border: "1px solid", margin: "5px", padding: "5px", width: "200px" }}>
//                   <p>
//                     <b>title</b> - {el.title}
//                   </p>
//                 </div>
//                 <button onClick={() => updatePostHandler(el.id)}>Update post</button>
//                 <button onClick={() => deletePostHandler(el.id)}>Delete post</button>
//               </div>
//             )
//           })}
//         </div>
//       )}
//     </div>
//   )
// }
//
// // Store
// const store = configureStore({
//   reducer: {
//     [appSlice.name]: appSlice.reducer,
//     [api.reducerPath]: api.reducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
// })
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // 📜 Описание:
// // Обновите страницу и обратите внимание, что при загрузке постов отрабатывает для загрузчика:
// // 1. LinearProgress (голубая полоска под хедером)
// // 2. Posts loading...
// // А при обновлении или удалении поста только LinearProgress
//
// // 🪛 Задача:
// // Что нужно написать вместо "❗X" для того, чтобы при загрузке постов осталась надпись только
// // Posts loading..., а LinearProgress не отображался. Но при этом для обновления или обновления
// // поста как и прежде LinearProgress должен отрабатывать




// import { configureStore } from "@reduxjs/toolkit"
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { createRoot } from "react-dom/client"
// import { Provider } from "react-redux"
//
// // Types
// type Todolist = {
//   id: string
//   title: string
//   order: number
//   createdAt: string
//   updatedAt: string
//   completed: boolean
// }
//
// const api = createApi({
//   reducerPath: "api",
//   baseQuery: async (args, api, extraOptions) => {
//     await new Promise((resolve) => setTimeout(resolve, 1000)) // Эмуляция задержки
//
//     return fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" })(args, api, extraOptions)
//   },
//   endpoints: (builder) => {
//     const url = Math.random() < 0.5 ? "todos" : "todos👺"
//     return {
//       todolists: builder.query<Todolist[], void>({
//         query: () => url,
//       }),
//     }
//   },
// })
//
// const { useTodolistsQuery } = api
//
// // Component
// const App = () => {
//   // ❗Использовать деструктуризацию запрещено
//   const data = useTodolistsQuery()
//
//   return (
//     <>
//       {
//         <>
//           {data.data?.map((t) => {
//             return (
//               <div style={t.completed ? { color: "grey" } : {}} key={t.id}>
//                 <input type="checkbox" checked={t.completed} />
//                 <b>Описание</b>: {t.title}
//               </div>
//             )
//           })}
//         </>
//       }
//       {data.isLoading && <h2>Загрузка...</h2>}
//       {data.isSuccess && <h2>👩‍💻 Секретный код: BHOlh#</h2>}
//       {data.isError && <h2> Error: 👺👺👺</h2>}
//     </>
//   )
// }
//
// // Store
// const store = configureStore({
//   reducer: {
//     [api.reducerPath]: api.reducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
// })
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // 📜 Описание:
// // Тудулисты с вероятностью в 50% подгружаюся успешно или падают с ошибкой.
// // Но изначально на экране мы видим: Загрузку, секретный код и сообщение об ошибке
//
// // 🪛 Задача:
// // Что нужно написать вместо "❗X","❗Y" и "❗Z" для того, чтобы:
// // 1. Загрузка показывалась только во время загрузки
// // 2. Секретный код показывалась только если запрос прошел успешно
// // 3. Ошибка показывалась только в случае ошибки
//
// // ❗ Ответ дайте через пробел
// // 🖥 Пример ответа: one two three



// import { createRoot } from "react-dom/client"
//
// export const App = () => {
//   return (
//     <div>
//       <h2>Какое из приведенных ниже определений верно?</h2>
//       <ol>
//         <li>
//           1 - Команда git push используется для выгрузки содержимого локального репозитория в удаленный репозиторий. Она
//           позволяет передать коммиты из локального репозитория в удаленный.
//         </li>
//         <li>
//           2 - Команда git pull используется для обновления локальной версии репозитория, синхронизируя её с содержимым
//           удалённого репозитория
//         </li>
//         <li>
//           3 - Команда git fetch загружает коммиты, файлы и ссылки из удаленного репозитория в ваш локальный репозиторий.
//           Извлеките данные с помощью команды fetch, если хотите увидеть, над чем работают остальные.
//         </li>
//         <li>4 - Ни одно из вышеперечисленных определений не верно</li>
//       </ol>
//     </div>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(<App />)
//
// // 📜 Описание:
// // Какое из приведенных ниже определений верно?
// // Может быть несколько вариантов ответа (ответ дайте через пробел).
// // ❗ Ответ будет засчитан как верный, только при полном правильном совпадении.
// // Если указали правильно один вариант (1),
// // а нужно было указать два варианта (1 и 2), то ответ в данном случае будет засчитан как неправильный
//
// // 🖥 Пример ответа: 1




// import { createRoot } from "react-dom/client"
// import { useState } from "react"
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { configureStore, nanoid } from "@reduxjs/toolkit"
// import { Provider } from "react-redux"
//
// type User = {
//   id: number
//   name: string
//   age: number
// }
//
// type UserResponse = {
//   totalCount: number
//   items: User[]
// }
//
//
// type GetUsersParams = {
//   pageSize: number
//   pageNumber: number
// }
//
//
// // Api
// const api = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" }),
//   endpoints: (builder) => ({
//     getUsers: builder.query<UserResponse, {pageSize: number, pageNumber: number}>({
//       query: ({ pageSize, pageNumber}) => {
//         return {
//           url: `users`,
//           params: {
//             pageSize,
//             pageNumber
//           }
//         }
//       },
//     }),
//   }),
// })
//
// const { useGetUsersQuery } = api
//
// // App
// const PAGE_SIZE = 3
//
// export const App = () => {
//   const [currentPage, setCurrentPage] = useState(1)
//
//   const { data } = useGetUsersQuery({ pageSize: PAGE_SIZE, pageNumber: currentPage })
//
//   const setPageHandler = (page: number) => {
//     setCurrentPage(page)
//   }
//
//   const length = data?.totalCount ? Math.ceil(data?.totalCount / PAGE_SIZE) : 1
//   const buttons = Array.from({ length }, (_, i) => ({
//     id: nanoid(),
//     title: i + 1,
//   }))
//
//   return (
//     <>
//       <h1>👪 Список пользователей</h1>
//       {data?.items.map((u) => (
//         <div style={{ marginBottom: "15px" }} key={u.id}>
//           <b>name</b>: {u.name}
//           <b>age</b>: {u.age}
//         </div>
//       ))}
//
//       {buttons.map((b) => (
//         <button
//           key={b.id}
//           style={b.title === currentPage ? { backgroundColor: "lightblue" } : {}}
//           onClick={() => setPageHandler(b.title)}
//         >
//           {b.title}
//         </button>
//       ))}
//     </>
//   )
// }
//
// // store.ts
// const store = configureStore({
//   reducer: { [api.reducerPath]: api.reducer },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
// })
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // 📜 Описание:
// // При загрузке приложения отрисовывается список пользователей.
// // Но если перейти на другие страницы, вы увидите, что пагинация не работает
//
// // Перепишите getUsers таким образом, чтобы пагинация отрабатывала верно
// // ❗Типизацию указывать обязательно
// // ❗Очередность применения query параметров:
// //  Первым: pageSize, вторым pageNumber.
// // Это касается и типизации и все остальных участках кода,
// // если вам понадобится доставать эти параметры
//
// // Пример ответа
// // getUsers: builder.query<{pageSize: any, pageNumber: any}>({
// //   query: () => {
// //     return {
// //       url: `users`,
// //     }
// //   },
// // }),



// import { configureStore } from "@reduxjs/toolkit";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { useEffect, useState } from "react";
// import { createRoot } from "react-dom/client";
// import { Provider } from "react-redux";
//
// // API
// type Photo = {
//   albumId: string;
//   id: string;
//   title: string;
//   url: string;
// };
//
// const api = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" }),
//   endpoints: (builder) => ({
//     getPhotos: builder.query<Photo[], void>({
//       query: () => "photos?delay=1",
//     }),
//   }),
// });
//
// const { useGetPhotosQuery } = api;
//
// // App.tsx
// const App = () => {
//   const { data, isSuccess, isLoading } = useGetPhotosQuery();
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//
//   useEffect(() => {
//     if (isSuccess) {
//       setShowSuccessMessage(true);
//
//       const timerId = setTimeout(() => {
//         setShowSuccessMessage(false);
//       }, 2000);
//
//       return () => {
//         clearTimeout(timerId);
//       };
//     }
//   }, [isSuccess]);
//
//   return (
//     <>
//       {isLoading && <b style={{ fontSize: "36px" }}>🕝Загрузка...</b>}
//       {showSuccessMessage && <b style={{ fontSize: "36px" }}>✅ Успех</b>}
//       {data?.map((el) => {
//         return (
//           <div key={el.id} style={{ margin: "5px", padding: "5px", width: "200px" }}>
//             <b>title</b> - {el.title}
//             <img src={el.url} alt={`${el.title} image`} />
//           </div>
//         );
//       })}
//     </>
//   );
// };
//
// // store.ts
// const store = configureStore({
//   reducer: {
//     [api.reducerPath]: api.reducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
// });
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// );
//
// // 📜 Описание:
// // На экране мы видим загрузку и затенм результат от сервера (photos).
//
// // 🪛 Задача:
// // Что нужно написать вместо `// ❗X` для того, чтобы в случае успешного завершения запроса
// // пользователь увидел сообщение `✅ Успех` и через 2 секунды это сообщение должно исчезнуть
//
// // После загрузки приложения подгружается информация о photos и если запрос прошел успешно мы видим об этом информацию (✅ Успех) и через 2 секунды это сообщение исчезает http://surl.li/mhseut
// // ❗Ответ будет принят только в том случае если вы отработаете утечку памяти



// import { configureStore } from "@reduxjs/toolkit"
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { createRoot } from "react-dom/client"
// import { Provider } from "react-redux"
//
// type Comment = {
//   postId: string
//   id: string
//   name: string
//   email: string
//   body: string
// }
//
// // Api
// const api = createApi({
//   reducerPath: "commentsApi",
//   tagTypes: ["Comment"],
//   baseQuery: fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" }),
//   endpoints: (builder) => ({
//     getComments: builder.query<Comment[], void>({
//       query: () => "comments",
//       providesTags: ["Comment"],
//       // ❗❗❗XXX ❗❗❗
//       transformResponse: (response: Comment[]) => {
//         // Сортируем по убыванию ID (новые в начале)
//         return [...response].sort((a, b) => parseInt(b.id) - parseInt(a.id))
//       }
//     }),
//     addComment: builder.mutation<Comment, string>({
//       query: (title) => ({
//         method: "POST",
//         url: "comments",
//         body: { body: title },
//       }),
//       invalidatesTags: ["Comment"],
//     }),
//   }),
// })
//
// const { useGetCommentsQuery, useAddCommentMutation } = api
//
// // App.tsx
// const App = () => {
//   const { data } = useGetCommentsQuery()
//   const [addComment] = useAddCommentMutation()
//
//   const addCommentHandler = () => {
//     addComment("Тестовая строка. Ее менять не нужно")
//   }
//
//   return (
//     <>
//       <button onClick={addCommentHandler}>Add comment</button>
//       {data?.map((comment) => {
//         return (
//           <div key={comment.id} style={{ border: "1px solid", margin: "5px", padding: "5px" }}>
//             <p>body - {comment.body}</p>
//           </div>
//         )
//       })}
//     </>
//   )
// }
//
// // store.ts
// const store = configureStore({
//   reducer: {
//     [api.reducerPath]: api.reducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
// })
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // Нажмите на кнопку Add comment и убедитесь в том, что запрос проходит и новый комментарий добавляется
// // Но проблема в том, что новый комментарий добавляется в конец массива
//
// // Что необходимо написать вместо // ❗❗❗XXX ❗❗❗,
// // чтобы поменять порядок элементов массива. Чтобы каждый новый добавленный комментарий
// // отображался в начале массива



// import { configureStore } from "@reduxjs/toolkit"
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { createRoot } from "react-dom/client"
// import { Provider } from "react-redux"
// import { useState } from "react"
//
// type Post = {
//   body: string
//   id: string
//   title: string
//   userId: string
// }
//
// // Api
// const api = createApi({
//   reducerPath: "api",
//   tagTypes: ["Post"],
//   baseQuery: fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api" }),
//   endpoints: (builder) => ({
//     getPosts: builder.query<Post[], void>({
//       query: () => "posts",
//       providesTags: ["Post"],
//     }),
//     removePost: builder.mutation<{ message: string }, string>({
//       query: (id) => ({
//         method: "DELETE",
//         url: `posts/${id}?delay=3`,
//       }),
//       async onQueryStarted(id, { queryFulfilled, dispatch }) {
//         const patchResult = dispatch(
//           api.util.updateQueryData("getPosts", undefined, (state) => {
//             const index = state.findIndex((post) => post.id === id)
//             if (index !== -1) {
//               state.splice(index, 1)
//             }
//           }),
//         )
//         try {
//           await queryFulfilled
//         } catch (error) {
//           patchResult.undo()
//         }
//       },
//       invalidatesTags: ["Post"],
//     }),
//   }),
// })
//
// const { useGetPostsQuery, useRemovePostMutation } = api
//
// // App.tsx
// const App = () => {
//   const { data } = useGetPostsQuery()
//   const [removePost] = useRemovePostMutation()
//
//   const [loadingId, setLoadingId] = useState<string | null>(null)
//
//   const removePostHandler = (id: string) => {
//     setLoadingId(id)
//     removePost(id).finally(() => {
//       setLoadingId(null)
//     })
//   }
//
//   return (
//     <>
//       {data?.map((el) => {
//         return (
//           <div key={el.id} style={{ display: "flex", alignItems: "center" }}>
//             {loadingId === el.id && <h3>Loading...</h3>}
//             <div style={{ border: "1px solid", margin: "5px", padding: "5px", width: "200px" }}>
//               <b>title</b> - {el.title}
//             </div>
//             <button onClick={() => removePostHandler(el.id)}>X</button>
//           </div>
//         )
//       })}
//     </>
//   )
// }
//
// // store.ts
// const store = configureStore({
//   reducer: { [api.reducerPath]: api.reducer },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
// })
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // Optimistic update для удаления поста почти реализован.
// // Что необходимо написать вместо // ❗❗❗XXX ❗❗❗ и // ❗❗❗YYY ❗❗❗
// // для последующего отката изменений в случае ошибки при запросе на сервер?




// import { createRoot } from "react-dom/client"
//
// export const App = () => {
//   return (
//     <div>
//       <h2>Какое из приведенных ниже определений верно ?</h2>
//       <ul>
//         <li>
//           1 - После того как файл был проиндексирован с помощью git init и закоммичен, git будет отслеживать все
//           следующие изменения в нём.
//         </li>
//         <li>
//           2 - Ветки в Git представляют собой указатель на коммит. Если нужно добавить какую-то фичу или исправить баг
//           (незначительный или серьезный), мы создаём новую ветку. Она будет содержать все изменения, которые мы хотим
//           добавить в репозиторий.
//         </li>
//         <li>
//           3 - Команда git add создает новый репозиторий Git. С ее помощью можно преобразовать существующий проект без
//           управления версиями в репозиторий Git или инициализировать новый пустой репозиторий
//         </li>
//         <li>4 - Ни одно из вышеперечисленных определений не верно</li>
//       </ul>
//     </div>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(<App />)
//
// // 📜 Описание:
// // Какое из приведенных ниже определений верно ?
// // Может быть несколько вариантов ответа (ответ дайте через пробел).
// // ❗ Ответ будет засчитан как верный, только при полном правильном совпадении.
// // Если указали правильно один вариант (1),
// // а нужно было указать два варианта (1 и 2), то ответ в данном случае будет засчитан как неправильный
//
// // 🖥 Пример ответа: 1





// import { configureStore } from "@reduxjs/toolkit"
// import { createApi, fetchBaseQuery, setupListeners } from "@reduxjs/toolkit/query/react"
// import { createRoot } from "react-dom/client"
// import { Provider } from "react-redux"
//
// type Comment = {
//   postId: string
//   id: string
//   name: string
//   email: string
//   body: string
// }
//
// // Api
// const api = createApi({
//   reducerPath: "commentsApi",
//   tagTypes: ["Comment"],
//   baseQuery: fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" }),
//   endpoints: (builder) => ({
//     getComments: builder.query<Comment[], void>({
//       query: () => "comments",
//       providesTags: ["Comment"],
//     }),
//     addComment: builder.mutation<Comment, string>({
//       query: (title) => ({
//         method: "POST",
//         url: "comments",
//         body: { body: title },
//       }),
//       invalidatesTags: ["Comment"],
//     }),
//   }),
// })
//
// const { useGetCommentsQuery, useAddCommentMutation } = api
//
// // App.tsx
// const App = () => {
//   const { data } = useGetCommentsQuery(undefined, { refetchOnFocus: true })
//   const [addComment] = useAddCommentMutation()
//
//   const addCommentHandler = () => {
//     addComment("Тестовая строка. Ее менять не нужно")
//   }
//
//   return (
//     <>
//       <button onClick={addCommentHandler}>Add comment</button>
//       {data
//         ?.slice()
//         .reverse()
//         .map((comment) => {
//           return (
//             <div key={comment.id} style={{ border: "1px solid", margin: "5px", padding: "5px" }}>
//               <p>body - {comment.body}</p>
//             </div>
//           )
//         })}
//     </>
//   )
// }
//
// // store.ts
// const store = configureStore({
//   reducer: {
//     [api.reducerPath]: api.reducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
// })
//
// setupListeners(store.dispatch);
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // На 39 строке добавлен refetchOnFocus.
// // Но если открыть приложение в двух вкладках, добавить комментарий в одной вкладке,
// // а потом перейти на другую, то нового комментария вы не увидите 🥲
// // Ваша задача разобраться с тем, почему refetchOnFocus не работает.
//
// // Что необходимо дописать в коде чтобы, починить refetchOnFocus ?
// // 💡Если понадобится что-то импортировать для решения данной задачи,
// // то импортируйте. В ответе добавленный импорт указывать не надо
//
// //  В качестве ответа укажите добавленный код




// import { createRoot } from "react-dom/client"
//
// export const App = () => {
//   return (
//     <div>
//       <h2>Для чего используется файл .gitignore ?</h2>
//       <ul>
//         <li>1 — Чтобы зашифровать конфиденциальные данные и спрятать их от GitHub</li>
//         <li>2 — Чтобы Git не отслеживал изменения в файлах указанных в gitignore</li>
//         <li>3 — Для хранения в нём паролей и API-ключей</li>
//         <li>4 — Чтобы отменить последний коммит</li>
//         <li>
//           5 - Файл .gitignore не несет никакой смысловой нагрузки, т.к. все файлы с которыми мы работаем должны
//           отслеживаться. Соответственно никакие файлы в .gitignore добавлять не нужно
//         </li>
//         <li>6 - Нет правильного ответа</li>
//       </ul>
//     </div>
//   )
// }
//
// createRoot(document.getElementById("root")!).render(<App />)
//
// // 📜 Описание:
// // Для чего используется файл в .gitignore ?
// // Может быть несколько вариантов ответа (ответ дайте через пробел).
// // ❗ Ответ будет засчитан как верный, только при полном правильном совпадении.
// // Если указали правильно один вариант (1),
// // а нужно было указать два варианта (1 и 2), то ответ в данном случае будет зачитан как неправильный
//
// // 🖥 Пример ответа: 1





// import { configureStore } from "@reduxjs/toolkit"
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { createRoot } from "react-dom/client"
// import { Provider } from "react-redux"
// import { useState } from "react"
//
// type Post = {
//   body: string
//   id: string
//   title: string
//   userId: string
// }
//
// // Api
// const api = createApi({
//   reducerPath: "api",
//   tagTypes: ["Post"],
//   baseQuery: fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api" }),
//   endpoints: (builder) => ({
//     getPosts: builder.query<Post[], void>({
//       query: () => "posts",
//       providesTags: ["Post"],
//     }),
//     removePost: builder.mutation<{ message: string }, string>({
//       query: (id) => ({
//         method: "DELETE",
//         url: `posts/${id}?delay=3`,
//       }),
//       async onQueryStarted(id, { queryFulfilled, dispatch }) {
//         const patchResult = dispatch(
//           api.util.updateQueryData("getPosts", undefined, (state) => {
//             const index = state.findIndex((post) => post.id === id)
//             if (index !== -1) {
//               state.splice(index, 1)
//             }
//           }),
//         )
//         try {
//           // ❗❗❗XXX ❗❗❗
//            await queryFulfilled
//         } catch (error) {
//           // ❗❗❗YYY ❗❗❗
//           patchResult.undo()
//         }
//       },
//       invalidatesTags: ["Post"],
//     }),
//   }),
// })
//
// const { useGetPostsQuery, useRemovePostMutation } = api
//
// // App.tsx
// const App = () => {
//   const { data } = useGetPostsQuery()
//   const [removePost] = useRemovePostMutation()
//
//   const [loadingId, setLoadingId] = useState<string | null>(null)
//
//   const removePostHandler = (id: string) => {
//     setLoadingId(id)
//     removePost(id).finally(() => {
//       setLoadingId(null)
//     })
//   }
//
//   return (
//     <>
//       {data?.map((el) => {
//         return (
//           <div key={el.id} style={{ display: "flex", alignItems: "center" }}>
//             {loadingId === el.id && <h3>Loading...</h3>}
//             <div style={{ border: "1px solid", margin: "5px", padding: "5px", width: "200px" }}>
//               <b>title</b> - {el.title}
//             </div>
//             <button onClick={() => removePostHandler(el.id)}>X</button>
//           </div>
//         )
//       })}
//     </>
//   )
// }
//
// // store.ts
// const store = configureStore({
//   reducer: { [api.reducerPath]: api.reducer },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
// })
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // Optimistic update для удаления поста почти реализован.
// // Что необходимо написать вместо // ❗❗❗XXX ❗❗❗ и // ❗❗❗YYY ❗❗❗
// // для последующего отката изменений в случае ошибки при запросе на сервер?




// import { configureStore } from "@reduxjs/toolkit";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import React from "react";
// import { createRoot } from "react-dom/client";
// import { Provider, useDispatch } from "react-redux";
// import { BrowserRouter, NavLink, Route, Routes } from "react-router";
//
// type Product = {
//   id: string;
//   title: string;
//   description: string;
//   price: number;
// };
//
// type ProductsResponse = {
//   total: number;
//   messages: string[];
//   page: number;
//   pageCount: number;
//   data: Product[];
// };
//
// type Film = {
//   id: number;
//   nameOriginal: string;
//   description: string;
//   ratingImdb: number;
// };
//
// type FilmsResponse = {
//   total: number;
//   messages: string[];
//   page: number;
//   pageCount: number;
//   data: Film[];
// };
//
// type Post = {
//   body: string;
//   id: string;
//   title: string;
//   userId: string;
// };
//
// // Api
// const api = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" }),
//   tagTypes: ["Film", "Product", "Post"],
//   endpoints: (builder) => {
//     return {
//       getFilms: builder.query<FilmsResponse, void>({
//         query: () => "films",
//         providesTags: ["Film"],
//       }),
//       getProducts: builder.query<ProductsResponse, void>({
//         query: () => "products",
//         providesTags: ["Product"],
//       }),
//       getPosts: builder.query<Post[], void>({
//         query: () => "posts",
//         providesTags: ["Post"],
//       }),
//     };
//   },
// });
//
// const { useGetFilmsQuery, useGetProductsQuery, useGetPostsQuery } = api;
//
// // Films.tsx
// const Films = () => {
//   const { data } = useGetFilmsQuery();
//
//   return (
//     <>
//       <h1>Films</h1>
//       {data?.data.map((el) => (
//         <div key={el.id} style={{ margin: "15px" }}>
//           movie title - <b>{el.nameOriginal}</b>
//         </div>
//       ))}
//     </>
//   );
// };
//
// const Products = () => {
//   const { data } = useGetProductsQuery();
//
//   return (
//     <>
//       <h1>Products</h1>
//       {data?.data.map((el) => (
//         <div key={el.id} style={{ margin: "15px" }}>
//           title - <b>{el.title}</b>
//         </div>
//       ))}
//     </>
//   );
// };
//
// const Posts = () => {
//   const { data } = useGetPostsQuery();
//
//   const dispatch = useDispatch();
//
//   const clearCacheHandler = () => {
//     // ❗❗❗XXX❗❗❗
//     dispatch(api.util.invalidateTags(["Film", "Product"]))
//   };
//
//   return (
//     <>
//       <h1>Posts</h1>
//       <button onClick={clearCacheHandler}>I clear cache. Mu-ha-ha 👺</button>
//       {data?.map((el) => (
//         <div key={el.id} style={{ margin: "15px" }}>
//           title - <b>{el.title}</b>
//         </div>
//       ))}
//     </>
//   );
// };
//
// export const App = () => {
//   return (
//     <>
//       <header style={{ display: "flex", alignItems: "center", gap: "10px", border: "1px solid" }}>
//         <ul>
//           Menu:
//           <li>
//             <NavLink to={"films"}>Films</NavLink>
//           </li>
//           <li>
//             <NavLink to={"products"}>Products</NavLink>
//           </li>
//           <li>
//             <NavLink to={"posts"}>Posts</NavLink>
//           </li>
//         </ul>
//       </header>
//
//       <Routes>
//         <Route path={"/"} element={<h1>Home page</h1>} />
//         <Route path={"/films"} element={<Films />} />
//         <Route path={"/products"} element={<Products />} />
//         <Route path={"/posts"} element={<Posts />} />
//       </Routes>
//     </>
//   );
// };
//
// // store.ts
// const store = configureStore({
//   reducer: { [api.reducerPath]: api.reducer },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
// });
//
// createRoot(document.getElementById("root")!).render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </BrowserRouter>,
// );
//
// // 📜 Описание:
// // Перейди на страницу фильмов и убедись, что фильмы подгрузились
// // Перейди на страницу продуктов и убедись, что продукты подгрузились
// // Перейди на страницу постов и убедись, что посты подгрузились
// // Открой redux devtools и убедись, что фильмы, продукты и посты сохранились в кеше
//
// // 🪛 Задача:
// // На странице постов есть кнопка `I clear cache. Mu-ha-ha 👺`. При нажатии на эту кнопку
// // необходимо зачистить кеш фильмов и продуктов
// // Что нужно написать вместо `// ❗❗❗XXX❗❗❗`, чтобы реализовать данную задачу





// import { configureStore, createSlice, isFulfilled, isPending, isRejected, nanoid } from "@reduxjs/toolkit"
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { createRoot } from "react-dom/client";
// import { Provider, useSelector } from "react-redux";
//
// const notificationsSlice = createSlice({
//   name: "notifications",
//   initialState: {
//     messages: [] as { type: "success" | "error" }[],
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     // ❗❗❗XXX❗❗❗
//     builder
//       .addMatcher(isFulfilled, (state) => {
//         state.messages.push({type: 'success'})
//       })
//       .addMatcher(isRejected, (state) => {
//         state.messages.push({type: 'error'})
//       })
//   },
//   selectors: {
//     selectMessages: (state) => state.messages,
//   },
// });
//
// export const { selectMessages } = notificationsSlice.selectors;
//
// type Post = {
//   body: string;
//   id: string;
//   title: string;
//   userId: string;
// };
//
// // Api
// const api = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" }),
//   tagTypes: ["Post"],
//   endpoints: (builder) => {
//     return {
//       getPosts: builder.query<Post[], void>({
//         query: () => "posts",
//         providesTags: ["Post"],
//       }),
//       updatePost: builder.mutation<Post, { id: string; payload: { title: string; body: string } }>({
//         query: ({ id, payload }) => ({
//           method: "PUT",
//           url: `posts/${id}`,
//           body: payload,
//         }),
//         invalidatesTags: ["Post"],
//       }),
//       removePost: builder.mutation<{ message: string }, string>({
//         query: () => ({
//           method: "DELETE",
//           url: `posts/${nanoid()}`,
//         }),
//         invalidatesTags: ["Post"],
//       }),
//     };
//   },
// });
//
// const { useGetPostsQuery, useUpdatePostMutation, useRemovePostMutation } = api;
//
// // App.tsx
// export const Posts = () => {
//   const { data } = useGetPostsQuery();
//   const [updatePost] = useUpdatePostMutation();
//   const [removePost] = useRemovePostMutation();
//
//   const updatePostHandler = (id: string) => {
//     updatePost({ id, payload: { title: "Тестовый title", body: "Тестовое body сообщение" } });
//   };
//
//   const deletePostHandler = (id: string) => {
//     removePost(id);
//   };
//
//   return (
//     <div style={{ border: "1px solid", margin: "5px", padding: "5px" }}>
//       <h2>Posts</h2>
//       {data?.map((el) => {
//         return (
//           <div key={el.id} style={{ display: "flex", alignItems: "center" }}>
//             <div style={{ border: "1px solid", margin: "5px", padding: "5px", width: "200px" }}>
//               <p>
//                 <b>title</b> - {el.title}
//               </p>
//             </div>
//             <button onClick={() => updatePostHandler(el.id)}>Update post</button>
//             <button onClick={() => deletePostHandler(el.id)}>Delete post</button>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
//
// export const Notifications = () => {
//   const messages = useAppSelector(selectMessages);
//
//   return (
//     <div style={{ border: "1px solid", margin: "5px", padding: "5px", width: "200px" }}>
//       <h2>Notifications</h2>
//       {messages?.map((m) => {
//         return (
//           <div>
//             {m.type === "success" ? (
//               <b style={{ color: "green" }}>Success</b>
//             ) : (
//               <b style={{ color: "red" }}>Error</b>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };
//
// const App = () => {
//   return (
//     <div style={{ display: "flex", gap: "100px" }}>
//       <Notifications />
//       <Posts />
//     </div>
//   );
// };
//
// // store.ts
// const store = configureStore({
//   reducer: {
//     [notificationsSlice.name]: notificationsSlice.reducer,
//     [api.reducerPath]: api.reducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
// });
//
// type RootState = ReturnType<typeof store.getState>;
// const useAppSelector = useSelector.withTypes<RootState>();
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// );
//
// // 📜 Описание:
// // При загрузке приложения слева отображается блок с уведомлениями (Notifications), а справа
// // блок с постами (Posts).
// // Откройте панель разработчика и попробуйте обновить пост. Вы увидите 2 успешных запроса.
// // Теперь попробуйте удалить пост. Вы увидите, что первый запрос за удалением поста падает с ошибкой,
// // а второй за получением всех постов отрабатывает успешно.
//
// // 🪛 Задача:
// // Ваша задача состоим в том чтобы написать систему оповещений, которая реагирует на каждый action.
// // Что нужно написать вместо `// ❗❗❗XXX❗❗❗` для того, чтобы отлавливать каждый экшен и если
// // он отработал успешно, то блоке Notifications появится сообщение Success, а если ошибка Error
// // Выглядеть блок должен примерно вот так: http://surl.li/slhhwi
// // ❗Выводить тип экшкена, доставить конкретную ошибку и прочее не надо.
//
// // 💡 Подсказка: для решения задачи используйте addMatcher (для успеха и ошибки).




// import { useEffect } from "react"
// import { createRoot } from "react-dom/client"
// import { Provider, useDispatch, useSelector } from "react-redux"
// import axios from "axios"
// import { asyncThunkCreator, buildCreateSlice, configureStore } from "@reduxjs/toolkit"
// import { z } from "zod"
//
// // Types
// type Product = {
//   id: string
//   title: string
//   description: string
//   price: number
// }
//
// type ProductsResponse = {
//   total: number
//   messages: string[]
//   page: number
//   pageCount: number
//   data: Product[]
// }
//
// // ZOD schemas
// const productSchema = z.object({
//   id: z.string(),
//   title: z.string(),
//   description: z.string(),
//   price: z.number().positive(),
// })
//
// const productsResponseSchema = z.object({
//   total: z.number().int().positive(),
//   messages: z.array(z.string()),
//   page: z.number().int().positive(),
//   pageCount: z.number().int().positive(),
//   data: z.array(productSchema),
// })
//
// // ❗Числа (total, page, pageCount) должны проверяться, что они целые и положительные
// // ❗ Менять порядок свойств в схеме запрещено
// // ❗ Выносить дублирующиеся проверки в отдельную переменную не надо
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const api = {
//   getProducts() {
//     return instance.get<ProductsResponse>("products")
//   },
// }
//
// // Slice
// const createAppSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })
//
// const slice = createAppSlice({
//   name: "products",
//   initialState: {
//     products: [] as Product[],
//   },
//   selectors: {
//     selectProducts: (state) => state.products,
//   },
//   reducers: (create) => ({
//     fetchProducts: create.asyncThunk(
//       async (_arg, { rejectWithValue }) => {
//         try {
//           const res = await api.getProducts()
//           productsResponseSchema.parse(res.data) // 💎 ZOD
//           return { products: res.data.data }
//         } catch (error) {
//           if (error instanceof z.ZodError) {
//             alert("Zod error")
//             console.table(error.issues)
//           }
//           return rejectWithValue(null)
//         }
//       },
//       {
//         fulfilled: (state, action) => {
//           state.products = action.payload.products
//         },
//       },
//     ),
//   }),
// })
//
// const filmsReducer = slice.reducer
// const { fetchProducts } = slice.actions
// const { selectProducts } = slice.selectors
//
// // App
// const App = () => {
//   const dispatch = useAppDispatch()
//   const products = useAppSelector(selectProducts)
//
//   useEffect(() => {
//     dispatch(fetchProducts())
//   }, [])
//
//   return (
//     <>
//       <h2>🛒 Products</h2>
//       {products.map((product) => {
//         return (
//           <div key={product.id}>
//             <b>{product.title}</b>
//             <p>{product.description}</p>
//             <p>💵 {product.price} $</p>
//           </div>
//         )
//       })}
//     </>
//   )
// }
//
// // Store
// const store = configureStore({
//   reducer: {
//     [slice.name]: filmsReducer,
//   },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
//
// // ❗Убедитесь, что у вас установлена библиотека zod.
// // Если нет, то установите `pnpm add zod`
//
// // При загрузке приложения падает с ошибкой (Zod error),
// // т.к. productsResponseSchema описана неверно.
// // Ваша задача на основании типа ProductsResponse устранить все ошибки в productsResponseSchema,
// // чтобы проверка прошла и фильмы подгрузились
// // ❗Числа (total, page, pageCount) должны проверяться, что они целые и положительные
// // ❗ Менять порядок свойств в схеме запрещено
// // ❗ Выносить дублирующиеся проверки в отдельную переменную не надо
//
// // В качестве ответа укажите productsResponseSchema целиком
//
// // Пример ответа
// // const productsResponseSchema = z.object({
// //   total: z.any(),
// //   messages: z.any(),
// //   page: z.any(),
// //   pageCount: z.string(),
// //   data: z.any(),
// // })




// import { configureStore } from "@reduxjs/toolkit";
// import { BaseQueryArg, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { createRoot } from "react-dom/client";
// import { Provider } from "react-redux";
//
// type Post = {
//   body: string;
//   id: string;
//   title: string;
//   userId: string;
// };
//
// // Api
// const api = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" }),
//   endpoints: (builder) => {
//     return {
//       getPosts: builder.query<Post[], void>({
//         query: () => "posts",
//       }),
//       //❗При написании типизации соблюдайте порядок аргументов как и при вызове функции updatePost
//       // ❗❗❗XXX❗❗❗
//       updatePost: builder.mutation<Post, {id: string, payload: {title: string, body: string}}>({
//         query: ({id, payload}) => ({
//           url: `posts/${id}`,
//           method: "put",
//           body: payload,
//         })
//       })
//     };
//   },
// });
//
// const { useGetPostsQuery, useUpdatePostMutation } = api;
//
// // App.tsx
// const App = () => {
//   const { data } = useGetPostsQuery();
//   const [updatePost] = useUpdatePostMutation();
//
//   const updatePostHandler = (id: string) => {
//     updatePost({ id, payload: { title: "Тестовый title", body: "Тестовое body сообщение" } });
//   };
//
//   return (
//     <>
//       {data?.map((el) => {
//         return (
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <div
//               key={el.id}
//               style={{ border: "1px solid", margin: "5px", padding: "5px", width: "200px" }}
//             >
//               <p>
//                 <b>title</b> - {el.title}
//               </p>
//             </div>
//             <button onClick={() => updatePostHandler(el.id)}>Update post</button>
//           </div>
//         );
//       })}
//     </>
//   );
// };
//
// // store.ts
// const store = configureStore({
//   reducer: { [api.reducerPath]: api.reducer },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
// });
//
// createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// );
//
// // 📜 Описание:
// // Приложение падает с ошибкой.
//
// // 🪛 Задача:
// // Что нужно написать вместо `// ❗❗❗XXX❗❗❗` для реализации обновления поста
// // В качестве ответа укажите написанный вами код
// // ❗Автоматическое получение данных реализовывать не надо
// // ❗Типизацию указывать обязательно





// import { asyncThunkCreator, buildCreateSlice, configureStore } from "@reduxjs/toolkit"
// import axios from "axios"
// import { createRoot } from "react-dom/client"
// import { SubmitHandler, useForm } from "react-hook-form"
// import { Provider, useDispatch, useSelector } from "react-redux"
// import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router"
// import { useEffect } from "react"
//
// // Types
// type Inputs = {
//   email: string
//   password: string
// }
//
// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })
//
// const api = {
//   login(data: Inputs) {
//     return instance.post("auth/login", data)
//   },
// }
//
// // Slice
// const createAppSlice = buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })
//
// const slice = createAppSlice({
//   name: "auth",
//   initialState: {
//     isLoggedIn: false,
//     isLoading: false,
//   },
//   selectors: {
//     selectIsLoggedIn: (state) => state.isLoggedIn,
//     selectIsLoading: (state) => state.isLoading,
//   },
//   reducers: (create) => ({
//     setLoading: create.reducer<{ isLoading: boolean }>((state, action) => {
//       state.isLoading = action.payload.isLoading
//     }),
//     login: create.asyncThunk(
//       async (arg: Inputs, { dispatch, rejectWithValue }) => {
//         try {
//           dispatch(setLoading({ isLoading: true }))
//           await api.login(arg)
//           return { isLoggedIn: true }
//         } catch (error) {
//           return rejectWithValue(null)
//         }
//       },
//       {
//         fulfilled: (state, action) => {
//           alert("Вы залогинились успешно")
//           state.isLoggedIn = action.payload.isLoggedIn
//         },
//         settled: (state) => {
//           state.isLoading = false
//         },
//       },
//     ),
//   }),
// })
//
// const authReducer = slice.reducer
// const { setLoading, login } = slice.actions
// const { selectIsLoading, selectIsLoggedIn } = slice.selectors
//
// // Components
// const Loader = () => {
//   return <h1>Loading ...</h1>
// }
//
// const Profile = () => {
//   return <h2>😎 Profile</h2>
// }
//
// const Login = () => {
//   const dispatch = useAppDispatch()
//   const navigate = useNavigate()
//
//   const isLoading = useAppSelector(selectIsLoading)
//   const isLoggedIn = useAppSelector(selectIsLoggedIn)
//
//   const { register, handleSubmit } = useForm<Inputs>({
//     defaultValues: { email: "darrell@gmail.com", password: "123" },
//   })
//
//   // ❗ XXX
//
//   //   useEffect(() => {
//   //   if (!isLoggedIn) {
//   //     navigate("/profile")
//   //   }
//   // }, [isLoggedIn, navigate])
//
//
//   if (isLoggedIn) {
//     return <Navigate to={"/profile"} />
//   }
//
//   const onSubmit: SubmitHandler<Inputs> = (data) => {
//     dispatch(login(data))
//   }
//
//   return (
//     <>
//       {isLoading && <Loader />}
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input placeholder={"Введите email"} {...register("email")} />
//         <input type={"password"} placeholder={"Введите пароль"} {...register("password")} />
//         <button type="submit">Залогиниться</button>
//       </form>
//     </>
//   )
// }
//
// // Store
// const store = configureStore({
//   reducer: {
//     [slice.name]: authReducer,
//   },
// })
//
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch
// const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// const useAppSelector = useSelector.withTypes<RootState>()
//
// createRoot(document.getElementById("root")!).render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <Routes>
//         <Route path={"/"} element={<Login />} />
//         <Route path={"profile"} element={<Profile />} />
//       </Routes>
//     </Provider>
//   </BrowserRouter>,
// )
//
// // 📜 Описание:
// // ❗ Email и password менять не надо. Это просто тестовые данные с которыми будет происходить
// // успешный запрос.
// // Нажмите на кнопку "Залогиниться" и вы увидели alert с успешным сообщением
//
// // Что необходимо написать вместо `❗ XXX`, чтобы
// // при успешной логинизации, редиректнуть пользователя на страницу Profile.
// // ❗ В консоли не должно быть ошибок







import { createRoot } from "react-dom/client"
import React, { useState } from "react"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"

// Styles
const table: React.CSSProperties = {
  borderCollapse: "collapse",
  width: "100%",
  tableLayout: "fixed",
}

const th: React.CSSProperties = {
  padding: "10px",
  border: "1px solid black",
  background: "lightgray",
  cursor: "pointer",
}

const td: React.CSSProperties = {
  padding: "10px",
  border: "1px solid black",
}

// Api
type User = {
  id: number
  name: string
  age: number
}

type UserResponse = {
  totalCount: number
  items: User[]
}

type SortDirection = "asc" | "desc" | null
type SortBy = "name" | "age" | null

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://exams-frontend.kimitsu.it-incubator.io/api/" }),
  endpoints: (builder) => ({
    getUsers: builder.query<UserResponse, {sortDirection: SortDirection, sortBy: SortBy} >({
      query: ({sortDirection, sortBy }) => {
        return {
          url: `users`,
          params: {
            sortDirection,
            sortBy
          }
        }
      },
    }),
  }),
})

const { useGetUsersQuery } = api

// App

export const App = () => {
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc")
  const [sortBy, setSortBy] = useState<SortBy>("age")

  const { data } = useGetUsersQuery({ sortDirection, sortBy })

  const sortHandler = (name: "name" | "age") => {
    const direction = sortDirection === "asc" ? "desc" : "asc"
    setSortDirection(direction)
    setSortBy(name)
  }

  return (
    <>
      <h1>👪 Список пользователей</h1>
      <table style={table}>
        <thead>
          <tr>
            <th style={th} onClick={() => sortHandler("name")}>
              Name
            </th>
            <th style={th} onClick={() => sortHandler("age")}>
              Age
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.items.map((user) => (
            <tr key={user.id}>
              <td style={td}>{user.name}</td>
              <td style={td}>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

// store.ts
const store = configureStore({
  reducer: { [api.reducerPath]: api.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

// 📜 Описание:
// При загрузке приложения отрисовывается таблица с пользователями.
// Нажмите на Name или Age и вы увидите как идет запрос на сервер.
// При нажатии на Age пользователи должны сортироваться по возрасту,
// а при нажатии на Name по имени
// Однако из-за того, что код getUsers написан неверно данные в таблицы не сортируются.

// Перепишите getUsers таким образом, чтобы пагинация сортировка отрабатывала верно
// ❗Типизацию указывать обязательно
// ❗Очередность применения query параметров.
// Первым: sortDirection, вторым sortBy.
// Это касается и типизации и все остальных участках кода,
// если вам понадобится доставать эти параметры

// Пример ответа
// getUsers: builder.query<{ sortDirection: any; sortBy: any >({
//       query: () => {
//         return {
//           url: `users`,
//         }
//       },
//     }),