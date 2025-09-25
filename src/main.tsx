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
