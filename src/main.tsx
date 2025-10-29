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


