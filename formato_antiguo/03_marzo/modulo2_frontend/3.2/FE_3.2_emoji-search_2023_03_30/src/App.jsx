import emoji from "emoji.json"
import CategoryFilter from "./components/CategoryFilter";
import { useMemo, useState } from "react";
import InputFilter from "./components/InputFilter";
import ClearFilterButton from "./components/ClearFilterButton";
import EmojiList from "./components/EmojiList";
import { Header } from "./styles/components/Header";
import { Title } from "./styles/components/Title";

const categories = [];

emoji.map((item) => {
  const category = item.category.split('(')[0].trim()
  if (!categories.includes(category)) categories.push(category)
})

categories.sort()

const allEmojiOrderedByCategory = []
categories.forEach(category => {
  const emojiInCategory = emoji.filter(emoji => emoji.category.startsWith(category))
  allEmojiOrderedByCategory.push(...emojiInCategory)
})


const filterEmoji = (textFilter, categoryFilter) => {
  const filteredEmoji = allEmojiOrderedByCategory.filter(emoji => {
    const nameIncludeFilter = emoji.name.toLowerCase().includes(textFilter.toLowerCase())
    const categoryStarsWithFilter = !categoryFilter || emoji.category.startsWith(categoryFilter)
    return nameIncludeFilter && categoryStarsWithFilter
  })
  filteredEmoji.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
  return filteredEmoji
}


export default function App() {

  const [textFilter, setTextFilter] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('')

  const filteredEmoji = useMemo(
    () => filterEmoji(textFilter, categoryFilter),
    [textFilter, categoryFilter]
  )

  return (
    <>
      <Header direction={'column'}>
        <Title>Emoji!</Title>
        <CategoryFilter categories={categories} onChange={e => setCategoryFilter(e.target.value)} value={categoryFilter} />
        <InputFilter onChange={e => setTextFilter(e.target.value)} value={textFilter} />
        <ClearFilterButton onClick={() => {
          setTextFilter('')
          setCategoryFilter('')
        }} />
      </Header>
      <EmojiList emojis={filteredEmoji} />
    </>
  )
}
