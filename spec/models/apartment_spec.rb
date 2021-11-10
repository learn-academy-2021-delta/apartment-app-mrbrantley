require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  let(:user) do
    User.create email: 'ross@rossome.com', password: 'guest', password_confirmation: 'guest'
  end

  # -----index-----
  describe "GET /index" do
    it 'gets all of the apartments' do
      Apartment.create street: '123 Elm Street', city: 'Springwood', state: 'OH', manager: 'Frederick Cougar', email: 'freddy@nightmare.com', price: '666', bedrooms: 5, bathrooms: 1, pets: 'sure', user_id: user.id

      get '/apartments'

      apartments = JSON.parse(response.body)
      expect(apartments.length).to eq 1
      expect(response).to have_http_status(200)

      apartment = apartments.first
      expect(apartment['street']).to eq '123 Elm Street'
      expect(apartment['city']).to eq 'Springwood'
      expect(apartment['state']).to eq 'OH'
      expect(apartment['manager']).to eq 'Frederick Cougar'
      expect(apartment['email']).to eq 'freddy@nightmare.com'
    end
  end
end