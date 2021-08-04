import styled, { css } from "styled-components"
import SearchBox from "./searchBox"

const open = css`
  width: 16em;
  background: ${({ theme }) => theme.background};
  cursor: text;
`

const closed = css`
  width: 16em;
  background: hsl(0, 0%, 91.37254901960785%);
  cursor: pointer;
`
export default styled(SearchBox)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 0;
  .SearchInput {
    padding: 10px 12px;
    outline: none;
    border: ${({ hasFocus }) => (hasFocus ? "auto" : "none")};
    font-size: 1em;
    transition: 100ms;
    border-radius: 2px;
    color: ${({ theme }) => theme.foreground};
    ::placeholder {
      color: ${({ theme }) => theme.faded};
    }
    ${({ hasFocus }) => (hasFocus ? open : closed)}
  }
`
