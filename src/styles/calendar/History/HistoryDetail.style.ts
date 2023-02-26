import styled from 'styled-components';

export const HistoryDetailContainer = styled.div`
  padding: 12px;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 4px;

  .headerBox {
    display: flex;
    column-gap: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid ${(props) => props.theme.border};

    .dateBox {
      .date {
        font-size: 16px;
        font-weight: 700;
      }
    }

    .infoBox {
      display: flex;
      flex-direction: column;
      row-gap: 8px;
      font-size: 15px;
      font-weight: 700;

      .blue {
        color: ${(props) => props.theme.blue};
      }

      .red {
        color: ${(props) => props.theme.red};
      }
    }
  }

  .mainBox {
    font-size: 15px;

    .mainTitle {
      margin: 8px 0 24px 0;
    }

    .historyList {
      display: flex;
      flex-direction: column;
      row-gap: 24px;
      height: 240px;
      overflow-y: auto;

      .historyItem {
        position: relative;
        display: flex;
        flex-direction: column;
        row-gap: 4px;

        .category {
          font-size: 14px;
        }

        .detailContent {
          display: flex;
          column-gap: 12px;
          padding-left: 8px;
          font-size: 13px;

          .content {
            width: 50%;
            color: ${(props) => props.theme.gray};
          }

          .amount {
            width: 50%;
            flex-shrink: 0;

            &.blue {
              color: ${(props) => props.theme.blue};
            }

            &.red {
              color: ${(props) => props.theme.red};
            }
          }
        }

        .updateBox {
          position: absolute;
          top: 0;
          right: 0;
          display: flex;
          align-items: center;
          column-gap: 8px;

          button {
            svg {
              width: 13px;
              height: 13px;
              fill: ${(props) => props.theme.gray};

              @media ${(props) => props.theme.desktop} {
                transition: fill 0.5s;

                &:hover {
                  fill: ${(props) => props.theme.hover};
                }
              }
            }
          }
        }
      }
    }
  }
`;
