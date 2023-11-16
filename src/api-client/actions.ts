import coins from './coins.json'
import { CoinsData, Params, TransferData } from '../containers/RootContext'

let balance = 100

export const fetchCoins = async ({ page, limit, title }: Params): Promise<CoinsData> => {
  // const url = `http://${domain}/api/coins?page=${page}&limit=${limit}&title=${title}`;
  // const res = await fetch(url);
  // return res.json();

  //mock
  const filteredData = coins.filter(({ title: t }) => t.includes(title))

  const data = filteredData.slice((page - 1) * limit, (page - 1) * limit + limit)

  return {
    data,
    meta: {
      page,
      limit,
      total: filteredData.length,
      page_count: Math.round(filteredData.length / limit) || 1
    }
  }
}

export const fetchBalance = async (): Promise<number> => {
  // const url = `http://${domain}/api/balance`;
  // const res = await fetch(url);
  // const {
  //   data: { balance },
  // } = await res.json();
  // return balance;

  //mock
  return balance
}

export const fetchCoinPrice = async (id: number): Promise<number> => {
  // const url = `http://${domain}/api/coins/${id}/price`;
  // const res = await fetch(url);
  // const {
  //   data: { price },
  // } = await res.json();
  // return price;

  //mock
  return id * 2
}

export const fetchTransfer = async (id: number, amount: number): Promise<TransferData> => {
  // const url = `http://${domain}/api/coins/${id}/transfer`;
  // const body = { amount };
  // const res = await fetch(url, {
  //   method: "POST",
  //   body: JSON.stringify(body),
  // });

  //mock
  const price = id * 2
  if (price * amount <= balance) {
    balance -= price * amount
    return {
      status: 200
    }
  } else {
    return {
      status: 422,
      errors: ['Insufficient funds']
    }
  }
}
