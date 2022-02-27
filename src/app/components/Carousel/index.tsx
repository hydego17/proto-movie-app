import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel, { Props as CarouselProps } from 'react-alice-carousel';
import styled from '@emotion/styled';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { useColorMode } from '@chakra-ui/react';

const renderButton =
  (label: 'next' | 'prev') =>
  ({ isDisabled }) => {
    return (
      <div
        role="button"
        className="carousel__arrow"
        style={{ opacity: isDisabled ? 0 : 1 }}
      >
        <span>
          {label === 'next' ? (
            <HiOutlineChevronRight />
          ) : (
            <HiOutlineChevronLeft />
          )}
        </span>
      </div>
    );
  };

export const Carousel = ({ items, ...props }: CarouselProps) => {
  const theme = useColorMode().colorMode;

  return (
    <CarouselStyled theme={theme}>
      <AliceCarousel
        items={items}
        mouseTracking
        animationDuration={750}
        renderPrevButton={renderButton('prev')}
        renderNextButton={renderButton('next')}
        {...props}
      />
    </CarouselStyled>
  );
};

const CarouselStyled = styled.div`
  body.chakra-ui-dark {
    .carousel__arrow {
      background: #c96767;
    }
  }

  .alice-carousel {
    & > div:first-of-type {
      .alice-carousel__wrapper {
      }
    }

    .alice-carousel__dots-item:not(.__custom):hover,
    .alice-carousel__dots-item:not(.__custom).__active {
      background-color: #e79d12;
    }

    .alice-carousel__prev-btn,
    .alice-carousel__next-btn {
      position: absolute;
      top: calc(50% - 22.5px);
      width: auto;
      text-align: unset;
      padding: 0;

      @media screen and (max-width: 600px) {
        display: none;
      }
    }

    .alice-carousel__prev-btn {
      left: -1rem;
    }

    .alice-carousel__next-btn {
      right: -1rem;
    }

    .carousel__arrow {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3rem;
      height: 3rem;
      border-radius: 3rem;
      background: ${(props) =>
        props.theme === 'dark' ? 'var(--chakra-colors-gray-800)' : 'white'};
      border-width: 1.5px;
      border-style: solid;
      border-color: ${(props) =>
        props.theme === 'dark'
          ? 'var(--chakra-colors-gray-700)'
          : 'var(--chakra-colors-gray-200)'};

      text-align: center;
      cursor: pointer;
      pointer-events: auto;
      transition: all 0.3s ease;
      -webkit-tap-highlight-color: transparent;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.08);

      svg {
        color: ${(props) =>
          props.theme === 'dark'
            ? 'var(--chakra-colors-gray-400)'
            : 'var(--chakra-colors-gray-500)'};
        width: 1.5rem;
        height: 1.5rem;
        transition: all 0.3s ease;
      }

      &:hover {
        opacity: 1;
        border-color: ${(props) =>
          props.theme === 'dark'
            ? 'var(--chakra-colors-gray-400)'
            : 'var(--chakra-colors-gray-700)'};
        box-shadow: 0 0 0 1px var(--main-color);
        text-decoration: none;

        svg {
          color: var(--main-color);
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
`;
