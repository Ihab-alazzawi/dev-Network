import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Inputs from '../components/common/Inputs';
import InputLinks from '../components/common/InputLinks';
import TextArea from '../components/common/TextArea';
import SelectList from '../components/common/SelectList';
import { createProfile } from '../actions/profileActions';
import isEmpty from '../validation/is-empty';

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: '',
      company: '',
      website: '',
      location: '',
      status: '',
      skills: '',
      githubusername: '',
      bio: '',
      twitter: '',
      facebook: '',
      linkedin: '',
      youtube: '',
      instagram: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const profileData = {
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      status: this.state.status,
      skills: this.state.skills,
      githubusername: this.state.githubusername,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram
    };
    //adding http if not exists
    if (
      !isEmpty(profileData.website) &&
      !/^(f|ht)tps?:\/\//i.test(profileData.website)
    ) {
      profileData.website = `http://${profileData.website}`;
    }
    if (
      !isEmpty(profileData.twitter) &&
      !/^(f|ht)tps?:\/\//i.test(profileData.twitter)
    ) {
      profileData.twitter = `https://${profileData.twitter}`;
    }
    if (
      !isEmpty(profileData.facebook) &&
      !/^(f|ht)tps?:\/\//i.test(profileData.facebook)
    ) {
      profileData.facebook = `https://${profileData.facebook}`;
    }
    if (
      !isEmpty(profileData.linkedin) &&
      !/^(f|ht)tps?:\/\//i.test(profileData.linkedin)
    ) {
      profileData.linkedin = `https://${profileData.linkedin}`;
    }
    if (
      !isEmpty(profileData.youtube) &&
      !/^(f|ht)tps?:\/\//i.test(profileData.youtube)
    ) {
      profileData.youtube = `https://${profileData.youtube}`;
    }
    if (
      !isEmpty(profileData.instagram) &&
      !/^(f|ht)tps?:\/\//i.test(profileData.instagram)
    ) {
      profileData.instagram = `https://${profileData.instagram}`;
    }

    this.props.createProfile(profileData, this.props.history);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, displaySocialInputs } = this.state;
    let socialInputs;
    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <InputLinks
            placeholder="Facebook Page URL"
            name="facebook"
            icon="fab fa-facebook"
            value={this.state.value}
            onChange={this.handleChange}
            error={errors.facebook}
          />
          <InputLinks
            placeholder="Twitter Profile URL"
            name="twitter"
            icon="fab fa-twitter"
            value={this.state.value}
            onChange={this.handleChange}
            error={errors.twitter}
          />
          <InputLinks
            placeholder="Linkedin Profile URL"
            name="linkedin"
            icon="fab fa-linkedin"
            value={this.state.value}
            onChange={this.handleChange}
            error={errors.linkedin}
          />
          <InputLinks
            placeholder="YouTube Channel URL"
            name="youtube"
            icon="fab fa-youtube"
            value={this.state.value}
            onChange={this.handleChange}
            error={errors.youtube}
          />
          <InputLinks
            placeholder="Instagram Page URL"
            name="instagram"
            icon="fab fa-instagram"
            value={this.state.value}
            onChange={this.handleChange}
            error={errors.instagram}
          />
        </div>
      );
    }

    //Select options for status
    const options = [
      { label: '* Select Professional Status', value: 0 },
      { label: 'Developer', value: 'Developer' },
      { label: 'Junior Developer', value: 'Junior Developer' },
      { label: 'Senior Developer', value: 'Senior Developer' },
      { label: 'Project Manager', value: 'Project Manager' },
      { label: 'Student or Learning', value: 'Student or Learning' },
      { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
      { label: 'Intern', value: 'Intern' },
      { label: 'Other', value: 'Other' }
    ];
    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center"> Create Your Profile</h1>
              <p className="lead text-center">
                Let's get some information to make your profile stand out
              </p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.handleSubmit}>
                <Inputs
                  placeholder="* Profile Handle"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.handleChange}
                  error={errors.handle}
                  info="A unique handle for your profile URL. Your full name, company name, nickname"
                />
                <SelectList
                  placeholder="Status"
                  name="status"
                  value={this.state.status}
                  options={options}
                  onChange={this.handleChange}
                  error={errors.status}
                  info="Give us an idea of where you are at in your career"
                />
                <Inputs
                  placeholder="Company"
                  name="company"
                  value={this.state.company}
                  onChange={this.handleChange}
                  error={errors.company}
                  info="Could be your own company or one you work for"
                />
                <Inputs
                  placeholder="Website"
                  name="website"
                  value={this.state.website}
                  onChange={this.handleChange}
                  error={errors.website}
                  info="Could be your own website or a company website"
                />
                <Inputs
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.handleChange}
                  error={errors.location}
                  info="City or city & state suggested (eg. Austin, TX)"
                />
                <Inputs
                  placeholder="* Skills"
                  name="skills"
                  value={this.state.skills}
                  onChange={this.handleChange}
                  error={errors.skills}
                  info="Please use comma separated values (eg. HTML,CSS,JavaScript)"
                />
                <Inputs
                  placeholder="Github Username"
                  name="githubusername"
                  value={this.state.githubusername}
                  onChange={this.handleChange}
                  error={errors.githubusername}
                  info="if you want your latest repos and a Github link, include your username"
                />
                <TextArea
                  placeholder="Short Bio"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.handleChange}
                  error={errors.bio}
                  info="Tell us a little about yourself"
                />
                <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                    className="btn btn-light"
                  >
                    Add Social Network Links
                  </button>
                  <span className="text-muted"> Optional</span>
                </div>
                {socialInputs}
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  errors: PropTypes.object.isRequired,
  createProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { createProfile }
)(withRouter(CreateProfile));
