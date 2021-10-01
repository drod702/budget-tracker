import React from 'react';

const isIncome = Math.round(Math.random())

const InfoCard = () => {
    return (
        <div style={{ textAlign: 'center', padding: '0 10%' }}>
            <strong>To use voice, try saying : </strong><br />
             Add {isIncome ? 'Income ' : 'Expense '} 
             for (amount) 
             in type of category 
             on (Date / Day)"
        </div>
    )
}

export default InfoCard
