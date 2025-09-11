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
