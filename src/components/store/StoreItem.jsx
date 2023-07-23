import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StoreItem = ({ storeItem }) => {
    return (
        <StoreItemWrapper className='card d-grid'>
            <div className='card-img img-fit-cover'>
                <img src = { storeItem?.image_background } alt = { storeItem?.id } />
            </div>
            <div className='card-text bg-white d-flex flex-column justify-content-center'>
                <h5 className='card-title text-uppercase fw-7 text-uppercase'><Link to = {`stores/${storeItem.id}`}>{ storeItem?.name}</Link></h5>
                <ul className='card-info'>
                    <li>
                        <span className='fw-7'>Domain:</span> <a href = { "https://www." + storeItem?.domain}> { storeItem?.domain}</a>
                    </li>
                    <li>
                        <span className='fw-7'>Games Count: </span> { storeItem?.games_count }
                    </li>
                </ul>
                <p className='fw-7'>Games: </p>
                <ul className='card-games'>
                    {
                        storeItem?.games?.map(item => {
                            return (
                                <li className='card-game' key = { item.id }>
                                    <Link to = { `games/${item.id}` }>{ item.name }</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </StoreItemWrapper>
    )
}

export default StoreItem;

const StoreItemWrapper = styled.div`
    grid-template-columns: repeat(2, 1fr);
    min-height: 120px;
    margin: 16px 0;

    .card-text{
        padding: 16px;

        .card-title{
            letter-spacing: 0.04em;
            color: #0B082D;
            font-size: 16px;
            display: inline-block;
            transition: var(--transition-default);

            &:hover{
                color: #000;
                opacity: 0.9;
            }
        }

        .card-info{
            li{
                color: #050415;
            }
        }

        .card-games{
            li{
                color: var(--clr-violet-darker);
                padding: 6px 12px;
                margin: 6px 0;
                background-color: #ededed;
                box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

                *{
                    font-weight: 500;
                    color: var(--clr-violet-darker);
                }

                &:hover{
                    text-decoration: underline;
                }
            }
        }
    }
`;
