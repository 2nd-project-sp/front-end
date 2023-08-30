import styled from 'styled-components';

const Purchase = () => {
	return (
		<PurchaseWrapper>
			<h3>주문배송조회</h3>
			<PurchaseTable>
				<PurchaseHeader>
					<div>상품정보</div>
					<div>배송비</div>
					<div>진행상태</div>
				</PurchaseHeader>
				<div>
					<span>주문일자 2022-08-25</span> <span>주문번호 abcdefghijkilnop</span>
				</div>
				<PurchaseBody>
					<li>
						<div>
							<img
								width={80}
								height={80}
								src='https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww&w=1000&q=80'
								alt=''
							/>
							<div>
								<span>벨라 메리제인 플랫</span>
								<span>옵션</span>
								<span>71000d원 / 수량 1개</span>
							</div>
						</div>
						<div>무료배송</div>
						<div>배송완료</div>
					</li>
					<li></li>
				</PurchaseBody>
			</PurchaseTable>
		</PurchaseWrapper>
	);
};

const PurchaseWrapper = styled.div`
	h3 {
		fontsize: 22px;
		color: #000000;
		line-height: 1.5;
		font-weight: 500;
		text-align: left;
		margin-bottom: 20px;
	}
`;

const PurchaseTable = styled.div``;

const PurchaseHeader = styled.div`
	display: flex;
	border-top: 4px solid black;

	> div {
		padding: 20px;
		fontsize: 18px;
		font-weight: 700;
		text-align: center;
	}

	> div:nth-child(1) {
		flex: 1;
	}
	> div:nth-child(2) {
		width: 230px;
	}
	> div:nth-child(3) {
		width: 150px;
	}
	& ~ div {
		border-top: 2px solid black;
		padding: 16px 0px;
		border-bottom: 1px solid rgb(228, 228, 228);
		text-align: left;
	}
`;

const PurchaseBody = styled.ul`
	li {
		display: flex;
		padding: 40px 0;
		align-items: center;
		border-bottom: 1px solid rgb(228, 228, 228);

		> div:nth-child(1) {
			flex: 1;
			display: flex;
			align-items: center;

			img {
				width: 80px;
				height: 80px;
			}

			div {
				display: flex;
				flex-direction: column;
				padding: 0 20px;
				text-align: left;

				span {
					&:nth-child(1) {
						font-size: 16px;
						font-weight: bold;
					}
					&:nth-child(2) {
						margin-top: 10px;
						font-size: 12px;
					}
					&:nth-child(3) {
						margin-top: 10px;
						font-size: 13px;
					}
				}
			}
		}
		> div:nth-child(2) {
			width: 230px;
		}
		> div:nth-child(3) {
			width: 150px;
		}
	}
`;

export default Purchase;
