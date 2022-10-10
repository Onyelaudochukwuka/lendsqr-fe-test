import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import data from '../../../../testing-utils/testdata';
import UserInfo from '..';
import { Response } from '../../../../utils/redux/apiConnection';

test('component is rendered', () => {
  render(<UserInfo data={data} />);
    const userFirstName = screen.getByTestId('user-first-name');
    const userPhoneNumber = screen.getByTestId('user-phone-number');
    const userEmail = screen.getByTestId('user-email');
    const userBvn = screen.getByTestId('user-bvn');
    const userGender = screen.getByTestId('user-gender');
    const userLoan = screen.getByTestId('user-loan');
    const userEducationLevel = screen.getByTestId('user-education-level');
    const dataEmploymentStatus = screen.getByTestId('user-employment-status');
    const userSector = screen.getByTestId('user-sector');
    const userEmploymentDuration = screen.getByTestId('user-employment-duration');
    const userEducationOfficialEmail = screen.getByTestId('user-education-official-email');
    const userEducationMonthlyIncome = screen.getByTestId('user-education-monthly-income');
    const userEducationLoan = screen.getByTestId('user-education-loan');
    const userTwitter = screen.getByTestId('user-twitter');
    const userFacebook = screen.getByTestId('user-facebook');
    const userInstagram = screen.getByTestId('user-instagram');
    const guarantorName = screen.getByTestId('guarantor-name');
    const guarantorEmail = screen.getByTestId('guarantor-email');

    expect(userFirstName).toBeInTheDocument();
    expect(userPhoneNumber).toBeInTheDocument();
    expect(userEmail).toBeInTheDocument();
    expect(userBvn).toBeInTheDocument();
    expect(userGender).toBeInTheDocument();
    expect(userLoan).toBeInTheDocument();
    expect(userEducationLevel).toBeInTheDocument();
    expect(dataEmploymentStatus).toBeInTheDocument();
    expect(userSector).toBeInTheDocument();
    expect(userEmploymentDuration).toBeInTheDocument();
    expect(userEducationOfficialEmail).toBeInTheDocument();
    expect(userEducationMonthlyIncome).toBeInTheDocument();
    expect(userEducationLoan).toBeInTheDocument();
    expect(userTwitter).toBeInTheDocument();
    expect(userFacebook).toBeInTheDocument();
    expect(userInstagram).toBeInTheDocument();
    expect(guarantorName).toBeInTheDocument();
    expect(guarantorEmail).toBeInTheDocument();

});
