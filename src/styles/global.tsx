import { Global, css } from '@emotion/react';

export function GlobalStyle() {
  return (
    <Global
      styles={css`
        .wrapped-full-width {
          width: 99.5vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
        }

        .overlay {
          &::after {
            content: '';
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 65%);
          }
        }

        .custom-scrollbar {
          &::-webkit-scrollbar {
            width: 9px;
          }

          &::-webkit-scrollbar-track {
            background-color: #f1f1f1;
          }

          &::-webkit-scrollbar-thumb {
            border-radius: 100px;
            border-left: 0;
            border-right: 0;
            background-color: #dfdfdf;

            &:hover {
              background-color: #d8d5d5;
            }
          }

          &::-webkit-scrollbar-button {
            width: 0;
            height: 0;
            display: none;
          }
          &::-webkit-scrollbar-corner {
            background-color: transparent;
          }
        }
      `}
    />
  );
}
