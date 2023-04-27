import tw, { styled } from 'twin.macro'

const Button = styled.button<{ color: string; className: string }>`
  ${tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-100 rounded`}
  ${(props) =>
    props.color === 'primary' &&
    tw`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-100 rounded`}
`
export function Example() {
  return <Button color="primary">Example</Button>
}
