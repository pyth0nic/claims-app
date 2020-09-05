import React, { useState, useRef, useEffect } from "react";
import Board from '@lourenci/react-kanban'
import '@lourenci/react-kanban/dist/styles.css'
import moment from 'moment';
import { updateCard } from './data/claims'

function ClaimCard ({ children: card, dragging, allowRemoveCard, onCardRemove }) {
	const cardStyle = {
		display: 'flex',
		justifyContent: 'space-between'
	  };

	const dot = ({ slaDiff, updatedTimeDiff }) => {
		let color = '#00d1b2';
		if (slaDiff > 0) {
			color = 'red'
		}

		return {
			height: '0.6em',
			width: '0.6em',
			backgroundColor: '#bbb',
			borderRadius: '50%',
			display: 'inline-block',
			backgroundColor: color
		};
	}

	return (
	  <div className={`react-kanban-card ${dragging ? 'react-kanban-card--dragging' : ''}`}>
		<span>
		  <div style={cardStyle}>
			<div className='react-kanban-card__description'>{card.description}</div>
			<div className='react-kanban-card__title' style={dot(card.times)}>
			</div>
		  </div>
		</span>
	  </div>
	)
  }

export default function TaskBoard(props) {
	const [claims, setClaims] = useState(props.claims);
	const [user] = useState(props.user);

	const getSlaDiff = (timeNow, updatedAt, slaHours) => slaHours == 0 ? 0 : moment(timeNow).diff((moment(updatedAt).add(slaHours, 'hour')), 'hour');
	const getLastUpdatedTime = (updatedAt, createdAt) => moment(updatedAt).diff(moment(createdAt), 'hours');

	const sortBoard = (board) => board.map(x=> {
			let sortedCards = _(x.cards)
								.filter(x=> x.assignedTo == user)
								.sortBy(['times.updateTimeDiff', 'times.slaDiff'])
								.reverse().value();
			x.cards = sortedCards;
			return x;
		});


	function populateBoard(claims) {
		let columns = claims.slas
						.map((x, i)=> ({ id: i, sla: x, title: x.status, cards: []}))
						.reduce((obj, item) => (obj[item.title] = item, obj) ,{});

		for (let i in claims.claims) {
			let claim = claims.claims[i];
			// todo test
			const updatedTimeDiff = getLastUpdatedTime(claim.updatedAt, claim.createdAt);
			const slaDiff = getSlaDiff(moment().toISOString(), claim.updatedAt, columns[claim.status].sla.hours);
			const description = claim.claimant;
			claim.description = description;
			claim.times = { slaDiff, updatedTimeDiff };
			columns[claim.status].cards.push(claim);	
		}
		let board = Object.values(columns);
		board = sortBoard(board);
		return { columns: board };
	}

	let claimBoard = populateBoard(claims);
	const [board, setBoard] = useState(claimBoard);

	function onCardDrag(card, source, destination) {
		let newStatus = claimBoard.columns[destination.toColumnId].sla.status;
		card.status = newStatus;
		card.updatedAt = moment().toISOString();

		const newClaims = updateCard(card);
		setClaims(newClaims);
		const newClaimBoard = populateBoard(newClaims);
		setBoard(newClaimBoard);
	}

	return (
		<div>
			<Board 
			children={board} 
			onCardDragEnd={onCardDrag} 
			renderCard={(card, { dragging }) => (
				<ClaimCard dragging={dragging}>
				  {card}
				</ClaimCard>
			  )} />
		</div>
	);
}