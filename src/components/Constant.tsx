export interface IQuestion {
    id: number;
    question: string;
    options: IOption[];
    answer: number;
  }

export interface IOption {
  id: number;
  text: string;
}

export interface IUserAnswer{
  questionId : number;
  answerId : number;
}


export const Questions: IQuestion[] = [
    {
      id: 1,
      question: "What is the main purpose of Ethereum?",
      options: [
        { id: 1, text: "To create a decentralized internet" },
        { id: 2, text: "To provide a platform for smart contracts" },
        { id: 3, text: "To facilitate cross-border payments" },
        { id: 4, text: "To create digital collectibles" },
      ],
      answer: 2,
    },
    {
      id: 2,
      question: "Who is the founder of Ethereum?",
      options: [
        { id: 1, text: "Vitalik Buterin" },
        { id: 2, text: "Gavin Wood" },
        { id: 3, text: "Charles Hoskinson" },
        { id: 4, text: "Joseph Lubin" },
      ],
      answer: 1,
    },
    {
      id: 3,
      question: "What is Ethereum's native cryptocurrency called?",
      options: [
        { id: 1, text: "Ether" },
        { id: 2, text: "Ethereum Coin" },
        { id: 3, text: "ETH" },
        { id: 4, text: "E-Currency" },
      ],
      answer: 1,
    },
    {
      id: 4,
      question:
        "What programming language is primarily used for writing Ethereum smart contracts?",
      options: [
        { id: 1, text: "JavaScript" },
        { id: 2, text: "Python" },
        { id: 3, text: "Solidity" },
        { id: 4, text: "Rust" },
      ],
      answer: 3,
    },
    {
      id: 5,
      question: "What is the purpose of Ethereum's virtual machine (EVM)?",
      options: [
        { id: 1, text: "To execute smart contracts" },
        { id: 2, text: "To mine Ether" },
        { id: 3, text: "To validate transactions" },
        { id: 4, text: "To secure the blockchain" },
      ],
      answer: 1,
    },
  ];