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






